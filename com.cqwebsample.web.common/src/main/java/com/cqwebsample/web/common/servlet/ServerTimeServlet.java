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

import com.cqwebsample.web.common.utils.HelperUtils;

@SlingServlet(name="servertime", paths="/apps/bean/servertime", methods={"GET", "POST"}, metatype=false)
public class ServerTimeServlet extends SlingAllMethodsServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1328232554162676712L;

	/**
	 *  Serves local server time in milliseconds to be use by ajax call
	 */
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
			e.printStackTrace();
		}
		out.flush();
	}
}
