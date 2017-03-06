export class Entry {
    votes: number = 0;
    constructor(public title: string, public link: string) { }

    upVote() {
        this.votes++;
    }

    downVote() {
        this.votes--;
    }
}