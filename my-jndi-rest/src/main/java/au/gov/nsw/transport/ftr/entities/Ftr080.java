package au.gov.nsw.transport.ftr.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FTR080")
public class Ftr080 {
	@Column(name = "PROG_NAME")
	private String progName;

	@Column(name = "DEFER_DATE")
	private String deferDate;

	@Column(name = "DEFER_TIME")
	private String deferTime;

	@Column(name = "REQUEST_DATA")
	private String requestData;

	@Column(name = "REQUEST_REC_NO")
	private String requestRecNo = "01";

	@Column(name = "REQUEST_BY")
	private String requestBy;

	@Column(name = "BANNER")
	private String banner = "                   ";

	@Column(name = "USER_ID")
	private String userId;

	@Column(name = "REQUEST_DSTRCT")
	private String requestDistrict = "CL01";
	@Column(name = "DISTRIB_CODE")
	private String distribCode = "          ";
	@Column(name = "PROG_REPORT_ID")
	private String progReportId = "A";
	@Column(name = "MEDIUM")
	private String medium = "P";
	@Column(name = "RETENTION_DAYS")
	private String retentionDays = "007";
	@Column(name = "START_OPTION")
	private String startOption = "N";
	@Column(name = "JOB_ID")
	private String jobId = "          ";
	@Column(name = "DSTRCT_CODE")
	private String districtCode = "RSA1";
	@Column(name = "MAX_UPDATES")
	private String maxUpdates = "00000000";
	@Column(name = "REQUEST_PARAMS")
	private String requestParams;

	@Column(name = "REQUEST_NO")
	private String requestNo = "01";
	@Column(name = "MEDIUM_PRT_IND")
	private String mediumPartIndicator = "N";
	@Column(name = "USERNO")
	private String userNo = "52AB";
	@Column(name = "SYS_JOBNO")
	private String sysJobNo = "     ";
	@Column(name = "PROCESS_STATUS")
	private String processStatus = "N";
	@Column(name = "POSITION_ID")
	private String positionId = "3009838   ";
	@Column(name = "PRINTER1")
	private String printer1 = "51";
	@Column(name = "NO_OF_COPIES1")
	private String noOfCopies1 = "01";

	@Column(name = "PRINTER2")
	private String printer2 = "  ";
	@Column(name = "NO_OF_COPIES2")
	private String noOfCopies2 = "00";
	@Column(name = "PRINTER3")
	private String printer3 = "  ";
	@Column(name = "NO_OF_COPIES3")
	private String noOfCopies3 = "00";
	@Column(name = "PRINTER4")
	private String printer4 = "  ";
	@Column(name = "NO_OF_COPIES4")
	private String noOfCopies4 = "00";
	@Column(name = "PRINTER5")
	private String printer5 = "  ";
	@Column(name = "NO_OF_COPIES5")
	private String noOfCopies5 = "00";
	@Column(name = "PRINTER6")
	private String printer6 = "  ";
	@Column(name = "NO_OF_COPIES6")
	private String noOfCopies6 = "00";
	@Column(name = "PRINTER7")
	private String printer7 = "  ";
	@Column(name = "NO_OF_COPIES7")
	private String noOfCopies7 = "00";
	@Column(name = "PRINTER8")
	private String printer8 = "  ";
	@Column(name = "NO_OF_COPIES8")
	private String noOfCopies8 = "00";
	@Column(name = "PRINTER9")
	private String printer9 = "  ";
	@Column(name = "NO_OF_COPIES9")
	private String noOfCopies9 = "00";
	@Column(name = "PRINTER10")
	private String printer10 = "  ";
	@Column(name = "NO_OF_COPIES10")
	private String noOfCopies10 = "00";

	@Column(name = "MAX_READS")
	private String maxReads = "00000000";
	@Column(name = "START_DATE")
	private String startDate = "        ";
	@Column(name = "START_TIME")
	private String startTime = "0000";
	@Column(name = "TIMESLOT_END")
	private String timeslotEnd = "0000";
	@Column(name = "COMMIT_COUNT")
	private String commitCount = "000000000";
	@Column(name = "LAST_COMMIT_DT")
	private String lastCommitDt = "        ";
	@Column(name = "LAST_COMMIT_TM")
	private String lastCommitTm = "000000";
	@Column(name = "RESTART_FLAG")
	private String restartFlag = " ";
	@Column(name = "OVERRIDE_FLAG")
	private String overrideFlag = " ";
	@Column(name = "NO_TO_PROCESS")
	private String noToProcess = "001";
	@Column(name = "NO_PROCESS_SPL")
	private String noProcessSpl = "001";

	@Column(name = "NOTIFY_SW")
	private String notifySW = "N";
	@Column(name = "GROUP_NAME")
	private String groupName = "        ";
	@Column(name = "EMPLOYEE_ID")
	private String employeeId;
	@Column(name = "PUB_TYPE")
	private String pubType = "TXT ";
	@Column(name = "LANGUAGE_CODE")
	private String languageCode = "ENA";
	@Column(name = "TASK_UUID")
	private String taskuuid = "2f188e3a1dd211b28af7e1f3f5eef880";
	@Id
	@Column(name = "UUID")
	private String uuid = "2f188e3a1dd211b28af7e1f3f5eef880";

	public String getProgName() {
		return progName;
	}

	public void setProgName(String progName) {
		this.progName = progName;
	}

	public String getDeferDate() {
		return deferDate;
	}

	public void setDeferDate(String deferDate) {
		this.deferDate = deferDate;
	}

	public String getDeferTime() {
		return deferTime;
	}

	public void setDeferTime(String deferTime) {
		this.deferTime = deferTime;
	}

	public String getRequestData() {
		return requestData;
	}

	public void setRequestData(String requestData) {
		this.requestData = requestData;
	}

	public String getRequestRecNo() {
		return requestRecNo;
	}

	public void setRequestRecNo(String requestRecNo) {
		this.requestRecNo = requestRecNo;
	}

	public String getRequestBy() {
		return requestBy;
	}

	public void setRequestBy(String requestBy) {
		this.requestBy = requestBy;
	}

	public String getBanner() {
		return banner;
	}

	public void setBanner(String banner) {
		this.banner = banner;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRequestDistrict() {
		return requestDistrict;
	}

	public void setRequestDistrict(String requestDistrict) {
		this.requestDistrict = requestDistrict;
	}

	public String getDistribCode() {
		return distribCode;
	}

	public void setDistribCode(String distribCode) {
		this.distribCode = distribCode;
	}

	public String getProgReportId() {
		return progReportId;
	}

	public void setProgReportId(String progReportId) {
		this.progReportId = progReportId;
	}

	public String getMedium() {
		return medium;
	}

	public void setMedium(String medium) {
		this.medium = medium;
	}

	public String getRetentionDays() {
		return retentionDays;
	}

	public void setRetentionDays(String retentionDays) {
		this.retentionDays = retentionDays;
	}

	public String getStartOption() {
		return startOption;
	}

	public void setStartOption(String startOption) {
		this.startOption = startOption;
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	public String getDistrictCode() {
		return districtCode;
	}

	public void setDistrictCode(String districtCode) {
		this.districtCode = districtCode;
	}

	public String getMaxUpdates() {
		return maxUpdates;
	}

	public void setMaxUpdates(String maxUpdates) {
		this.maxUpdates = maxUpdates;
	}

	public String getRequestParams() {
		return requestParams;
	}

	public void setRequestParams(String requestParams) {
		this.requestParams = requestParams;
	}

	public String getRequestNo() {
		return requestNo;
	}

	public void setRequestNo(String requestNo) {
		this.requestNo = requestNo;
	}

	public String getMediumPartIndicator() {
		return mediumPartIndicator;
	}

	public void setMediumPartIndicator(String mediumPartIndicator) {
		this.mediumPartIndicator = mediumPartIndicator;
	}

	public String getUserNo() {
		return userNo;
	}

	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}

	public String getSysJobNo() {
		return sysJobNo;
	}

	public void setSysJobNo(String sysJobNo) {
		this.sysJobNo = sysJobNo;
	}

	public String getProcessStatus() {
		return processStatus;
	}

	public void setProcessStatus(String processStatus) {
		this.processStatus = processStatus;
	}

	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	public String getPrinter1() {
		return printer1;
	}

	public void setPrinter1(String printer1) {
		this.printer1 = printer1;
	}

	public String getNoOfCopies1() {
		return noOfCopies1;
	}

	public void setNoOfCopies1(String noOfCopies1) {
		this.noOfCopies1 = noOfCopies1;
	}

	public String getPrinter2() {
		return printer2;
	}

	public void setPrinter2(String printer2) {
		this.printer2 = printer2;
	}

	public String getNoOfCopies2() {
		return noOfCopies2;
	}

	public void setNoOfCopies2(String noOfCopies2) {
		this.noOfCopies2 = noOfCopies2;
	}

	public String getPrinter3() {
		return printer3;
	}

	public void setPrinter3(String printer3) {
		this.printer3 = printer3;
	}

	public String getNoOfCopies3() {
		return noOfCopies3;
	}

	public void setNoOfCopies3(String noOfCopies3) {
		this.noOfCopies3 = noOfCopies3;
	}

	public String getPrinter4() {
		return printer4;
	}

	public void setPrinter4(String printer4) {
		this.printer4 = printer4;
	}

	public String getNoOfCopies4() {
		return noOfCopies4;
	}

	public void setNoOfCopies4(String noOfCopies4) {
		this.noOfCopies4 = noOfCopies4;
	}

	public String getPrinter5() {
		return printer5;
	}

	public void setPrinter5(String printer5) {
		this.printer5 = printer5;
	}

	public String getNoOfCopies5() {
		return noOfCopies5;
	}

	public void setNoOfCopies5(String noOfCopies5) {
		this.noOfCopies5 = noOfCopies5;
	}

	public String getPrinter6() {
		return printer6;
	}

	public void setPrinter6(String printer6) {
		this.printer6 = printer6;
	}

	public String getNoOfCopies6() {
		return noOfCopies6;
	}

	public void setNoOfCopies6(String noOfCopies6) {
		this.noOfCopies6 = noOfCopies6;
	}

	public String getPrinter7() {
		return printer7;
	}

	public void setPrinter7(String printer7) {
		this.printer7 = printer7;
	}

	public String getNoOfCopies7() {
		return noOfCopies7;
	}

	public void setNoOfCopies7(String noOfCopies7) {
		this.noOfCopies7 = noOfCopies7;
	}

	public String getPrinter8() {
		return printer8;
	}

	public void setPrinter8(String printer8) {
		this.printer8 = printer8;
	}

	public String getNoOfCopies8() {
		return noOfCopies8;
	}

	public void setNoOfCopies8(String noOfCopies8) {
		this.noOfCopies8 = noOfCopies8;
	}

	public String getPrinter9() {
		return printer9;
	}

	public void setPrinter9(String printer9) {
		this.printer9 = printer9;
	}

	public String getNoOfCopies9() {
		return noOfCopies9;
	}

	public void setNoOfCopies9(String noOfCopies9) {
		this.noOfCopies9 = noOfCopies9;
	}

	public String getPrinter10() {
		return printer10;
	}

	public void setPrinter10(String printer10) {
		this.printer10 = printer10;
	}

	public String getNoOfCopies10() {
		return noOfCopies10;
	}

	public void setNoOfCopies10(String noOfCopies10) {
		this.noOfCopies10 = noOfCopies10;
	}

	public String getMaxReads() {
		return maxReads;
	}

	public void setMaxReads(String maxReads) {
		this.maxReads = maxReads;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getTimeslotEnd() {
		return timeslotEnd;
	}

	public void setTimeslotEnd(String timeslotEnd) {
		this.timeslotEnd = timeslotEnd;
	}

	public String getCommitCount() {
		return commitCount;
	}

	public void setCommitCount(String commitCount) {
		this.commitCount = commitCount;
	}

	public String getLastCommitDt() {
		return lastCommitDt;
	}

	public void setLastCommitDt(String lastCommitDt) {
		this.lastCommitDt = lastCommitDt;
	}

	public String getLastCommitTm() {
		return lastCommitTm;
	}

	public void setLastCommitTm(String lastCommitTm) {
		this.lastCommitTm = lastCommitTm;
	}

	public String getRestartFlag() {
		return restartFlag;
	}

	public void setRestartFlag(String restartFlag) {
		this.restartFlag = restartFlag;
	}

	public String getOverrideFlag() {
		return overrideFlag;
	}

	public void setOverrideFlag(String overrideFlag) {
		this.overrideFlag = overrideFlag;
	}

	public String getNoToProcess() {
		return noToProcess;
	}

	public void setNoToProcess(String noToProcess) {
		this.noToProcess = noToProcess;
	}

	public String getNoProcessSpl() {
		return noProcessSpl;
	}

	public void setNoProcessSpl(String noProcessSpl) {
		this.noProcessSpl = noProcessSpl;
	}

	public String getNotifySW() {
		return notifySW;
	}

	public void setNotifySW(String notifySW) {
		this.notifySW = notifySW;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getPubType() {
		return pubType;
	}

	public void setPubType(String pubType) {
		this.pubType = pubType;
	}

	public String getLanguageCode() {
		return languageCode;
	}

	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
	}

	public String getTaskuuid() {
		return taskuuid;
	}

	public void setTaskuuid(String taskuuid) {
		this.taskuuid = taskuuid;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
}
