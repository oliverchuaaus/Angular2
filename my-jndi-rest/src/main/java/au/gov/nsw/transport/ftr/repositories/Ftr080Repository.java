package au.gov.nsw.transport.ftr.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import au.gov.nsw.transport.ftr.entities.Ftr080;

public interface Ftr080Repository extends JpaRepository<Ftr080, String>
{
	public List<Ftr080> findByProgName(String progName);

}
