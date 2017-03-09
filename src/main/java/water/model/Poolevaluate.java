package water.model;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;



public class Poolevaluate {
    private Integer id;
    
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date t;

    private String poolid;

    private BigDecimal pac;

    private BigDecimal fecl3;

    private BigDecimal opendegree;

    private BigDecimal rotationspeed;

    private BigDecimal sv;

    private BigDecimal smallmudfre;

    private BigDecimal bigmudfre;

    private BigDecimal ntu;

    private BigDecimal algaecontent;

    private BigDecimal outntu;

    private BigDecimal cl;

    private BigDecimal watertemp;
    
    private List<Poolevaluate> poolevaluate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public  Date getT() {
        return t;
    }

    public void setT(Date t) {
        this.t = t;
    }

    public String getPoolid() {
        return poolid;
    }

    public void setPoolid(String poolid) {
        this.poolid = poolid == null ? null : poolid.trim();
    }

    public BigDecimal getPac() {
        return pac;
    }

    public void setPac(BigDecimal pac) {
        this.pac = pac;
    }

    public BigDecimal getFecl3() {
        return fecl3;
    }

    public void setFecl3(BigDecimal fecl3) {
        this.fecl3 = fecl3;
    }

    public BigDecimal getOpendegree() {
        return opendegree;
    }

    public void setOpendegree(BigDecimal opendegree) {
        this.opendegree = opendegree;
    }

    public BigDecimal getRotationspeed() {
        return rotationspeed;
    }

    public void setRotationspeed(BigDecimal rotationspeed) {
        this.rotationspeed = rotationspeed;
    }

    public BigDecimal getSv() {
        return sv;
    }

    public void setSv(BigDecimal sv) {
        this.sv = sv;
    }

    public BigDecimal getSmallmudfre() {
        return smallmudfre;
    }

    public void setSmallmudfre(BigDecimal smallmudfre) {
        this.smallmudfre = smallmudfre;
    }

    public BigDecimal getBigmudfre() {
        return bigmudfre;
    }

    public void setBigmudfre(BigDecimal bigmudfre) {
        this.bigmudfre = bigmudfre;
    }

    public BigDecimal getNtu() {
        return ntu;
    }

    public void setNtu(BigDecimal ntu) {
        this.ntu = ntu;
    }

    public BigDecimal getAlgaecontent() {
        return algaecontent;
    }

    public void setAlgaecontent(BigDecimal algaecontent) {
        this.algaecontent = algaecontent;
    }

    public BigDecimal getOutntu() {
        return outntu;
    }

    public void setOutntu(BigDecimal outntu) {
        this.outntu = outntu;
    }

    public BigDecimal getCl() {
        return cl;
    }

    public void setCl(BigDecimal cl) {
        this.cl = cl;
    }

    public BigDecimal getWatertemp() {
        return watertemp;
    }

    public void setWatertemp(BigDecimal watertemp) {
        this.watertemp = watertemp;
    }
    
    public List<Poolevaluate> getPoolevaluate(){
    	return poolevaluate;
    }
}