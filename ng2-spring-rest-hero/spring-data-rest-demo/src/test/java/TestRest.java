import java.io.IOException;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sivalabs.springdatarest.entities.Hero;

public class TestRest {
	private static final String URL = "http://localhost:8080/spring-data-rest-demo/rest/hero";
	private static final ObjectMapper mapper = new ObjectMapper();

	@Test
	public void testList() throws JsonParseException, JsonMappingException, IOException {
		RestTemplate template = new RestTemplate();
		ResponseEntity<String> resp = template.getForEntity(URL, String.class);
		List<Hero> heroList = mapper.readValue(resp.getBody(), new TypeReference<List<Hero>>() {
		});
		Assert.assertTrue(heroList.size()>0);
	}

	@Test
	public void testPost() throws JsonParseException, JsonMappingException, IOException {
		RestTemplate template = new RestTemplate();
		Hero hero = new Hero();
		hero.setName("Bombasto"+Math.random());
		ResponseEntity<String> resp = template.postForEntity(URL, hero, String.class);
		Hero newHero = mapper.readValue(resp.getBody(), Hero.class);
		Assert.assertTrue(newHero.getId()!=null);
	}
	
	@Test
	public void testGet() throws JsonParseException, JsonMappingException, IOException {
		RestTemplate template = new RestTemplate();
		ResponseEntity<String> resp = template.getForEntity(URL+"/30", String.class);
		Hero hero = mapper.readValue(resp.getBody(), Hero.class);
		Assert.assertTrue(hero.getId()!=null);
	}
	
	@Test
	public void testUpdate() throws JsonParseException, JsonMappingException, IOException {
		RestTemplate template = new RestTemplate();
		ResponseEntity<String> resp = template.getForEntity(URL+"/30", String.class);
		Hero hero = mapper.readValue(resp.getBody(), Hero.class);
		Assert.assertTrue(hero.getId()!=null);
		
		hero.setName("Hello");
		template.put(URL+"/30", hero);

		resp = template.getForEntity(URL+"/30", String.class);
		hero = mapper.readValue(resp.getBody(), Hero.class);
		Assert.assertEquals("Hello", hero.getName());
		
	}
	
	@Test
	public void testDelete() throws JsonParseException, JsonMappingException, IOException {
		RestTemplate template = new RestTemplate();
		template.delete(URL+"/30");
		
		template = new RestTemplate();
		ResponseEntity<String> resp = template.getForEntity(URL+"/30", String.class);
		Hero hero = mapper.readValue(resp.getBody(), Hero.class);
		Assert.assertTrue(hero!=null);

	}

}
