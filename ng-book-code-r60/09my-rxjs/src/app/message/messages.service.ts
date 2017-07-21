import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from './message.model';

interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
}
const initialMessages: Message[] = [];

@Injectable()
export class MessagesService {
    newMessages: Subject<Message> = new Subject<Message>();
    create: Subject<Message> = new Subject<Message>();
    updates: Subject<any> = new Subject<any>();
    messages: Observable<Message[]>;

    constructor() {
        this.messages = this.updates
            .scan((messages: Message[],
                operation: IMessagesOperation) => {
                //console.log('operation: %O' , operation);        
                console.log('operation(messages): %O' , operation(messages));
                return operation(messages);
            }, new Array<Message>())
            .publishReplay(2)
            .refCount();

        this.create.map(function (message: Message): IMessagesOperation {
            return (messages: Message[]) => {
                //console.log('create: %O' , messages);
                return messages.concat(message);
            };
        }).subscribe(this.updates);

        this.newMessages.subscribe(this.create);
    }

    addMessage(message: Message): void {
        this.newMessages.next(message);
    }

    messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
        return this.newMessages
            .filter((message: Message) => {
                // belongs to this thread
                return (message.thread.id === thread.id) &&
                    // and isn't authored by this user
                    (message.author.id !== user.id);
            });
    }
}



