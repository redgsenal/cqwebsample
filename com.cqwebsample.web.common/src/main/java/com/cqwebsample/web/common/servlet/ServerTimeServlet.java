package com.cqwebsample.web.common.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.LoggerFactory;

import com.cqwebsample.web.common.utils.HelperUtils;

@SlingServlet(name="mastheadservertime", paths="/apps/bean/mastheadservertime", methods={"GET", "POST"}, metatype=false)
public class ServerTimeServlet extends SlingAllMethodsServlet {

	/**
	 *  Serves local server time in milliseconds to be use by masthead ajax call
	 */
	private static final long serialVersionUID = -904811244667775164L;
	private final org.slf4j.Logger log = LoggerFactory.getLogger(ServerTimeServlet.class);
	
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
		this.getServerTime(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
		this.getServerTime(request, response);
	}

	private void getServerTime(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		JSONObject jsn = null;
		try {
			jsn = new JSONObject();
			jsn.put("time", HelperUtils.getServerTime());
			out.print(jsn.toString());
		} catch (JSONException e) {
			log.error("error " + e.getMessage());
			e.printStackTrace();
		}
		out.flush();
	}
}
