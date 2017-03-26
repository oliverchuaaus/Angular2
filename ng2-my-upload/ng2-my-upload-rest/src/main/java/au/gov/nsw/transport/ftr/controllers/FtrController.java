package au.gov.nsw.transport.ftr.controllers;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


/**
 */
@Controller
@RequestMapping(value = "/ftr")
public class FtrController {
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String ping() {
		return "Ping successful";
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/upload")
	@ResponseBody
	public String fileUpload(@RequestParam MultipartFile uploadFile) throws IOException {
		uploadFile.getContentType();
		Reader in = new InputStreamReader(uploadFile.getInputStream());
		Iterable<CSVRecord> records = CSVFormat.EXCEL.parse(in);
		
		for (CSVRecord record : records) {
		    String lastName = record.get(0);
		    String firstName = record.get(1);
		    String value = record.get(2);
		    System.out.println("|"+lastName+"|"+firstName+"|"+value+"|");
		}

		return "file";
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/uploadMultipart")
	@ResponseBody
	public String fileUploadMultipart(@RequestParam MultipartFile uploadFile, @RequestParam String key1, @RequestParam String key2) throws IOException {
		uploadFile.getContentType();
		Reader in = new InputStreamReader(uploadFile.getInputStream());
		Iterable<CSVRecord> records = CSVFormat.EXCEL.parse(in);
		
		for (CSVRecord record : records) {
		    String lastName = record.get(0);
		    String firstName = record.get(1);
		    String value = record.get(2);
		    System.out.println("|"+lastName+"|"+firstName+"|"+value+"|");
		}

		return "file";
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/uploader")
	@ResponseBody
	public String fileUploader(@RequestParam("file") MultipartFile uploader) throws IOException {
		
			uploader.getContentType();
			Reader in = new InputStreamReader(uploader.getInputStream());
			Iterable<CSVRecord> records = CSVFormat.EXCEL.parse(in);
			
			for (CSVRecord record : records) {
			    String lastName = record.get(0);
			    String firstName = record.get(1);
			    String value = record.get(2);
			    System.out.println("|"+lastName+"|"+firstName+"|"+value+"|");
			}


		return "file";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/uploader")
	@ResponseBody
	public String getFileUploader() throws IOException {
		return "something";
	}

}
