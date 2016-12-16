package com.sivalabs.springdatarest.web.config;

//import org.springframework.web.filter.DelegatingFilterProxy;
import javax.servlet.Filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.sivalabs.springdatarest.config.AppConfig;

/**
 * @author Siva
 * 
 */
@Configuration
public class SpringWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer implements WebApplicationInitializer
{

	@Override
	protected Class<?>[] getRootConfigClasses()
	{
		return new Class<?>[] { AppConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses()
	{
		return new Class<?>[] { WebMvcConfig.class, RepositoryRestMvcConfiguration.class };
	}

	@Override
	protected String[] getServletMappings()
	{
		
		return new String[] { "/rest/*" };
	}
	
	//Instead we used SecurityWebApplicationInitializer
	
	@Override
    protected Filter[] getServletFilters() {
       return new Filter[]{
    		   //new DelegatingFilterProxy("springSecurityFilterChain")
    		   new OpenEntityManagerInViewFilter()
       };
    } 
	
	

}
