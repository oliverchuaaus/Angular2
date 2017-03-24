package au.gov.nsw.transport.ftr.services;

import java.util.List;

import javax.naming.NamingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jndi.JndiObjectFactoryBean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.gov.nsw.transport.ftr.entities.Ftr080;
import au.gov.nsw.transport.ftr.repositories.Ftr080Repository;

@Service
@Transactional
public class FtrService {
	@Autowired
	private Ftr080Repository repo;

	public List<Ftr080> find() {
		return repo.findByProgName("progName");
	}

	public String get() throws NamingException {
		return getJndiValue("unixCommand");
	}

	private static final String PREFIX = "java:/comp/env/";

	private String getJndiValue(String name) {
		JndiObjectFactoryBean jndiFactoryBean = new JndiObjectFactoryBean();
		jndiFactoryBean.setJndiName(name);
		try {
			jndiFactoryBean.afterPropertiesSet();
		} catch (IllegalArgumentException e) {
			if (!name.startsWith("java")) {
				return getJndiValue(PREFIX + name);
			}
			throw new RuntimeException(e);
		} catch (NamingException e) {
			if (!name.startsWith("java")) {
				return getJndiValue(PREFIX + name);
			}
			throw new RuntimeException(e);
		}
		return (String) jndiFactoryBean.getObject();
	}
}
