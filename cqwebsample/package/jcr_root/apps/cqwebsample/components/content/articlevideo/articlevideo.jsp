<%--

  Article Video component.

--%>
<%@include file="/apps/cqwebsample/global/global.jsp"%>
<%@page session="false"%>
<%
	String videocopy = properties.get("videocopy", "");
	String videoimg = properties.get("videoimg", "/etc/designs/cqwebsample/clientlibs/images/videoimg.jpg");
	String videourl = properties.get("videourl", "");
	String videocaption = properties.get("videocaption", "");
%>
<div class="page-wrapper">
  <section class="component-padding-btm-small">
    <div class="component-module page-container">
      <div class="article page-container-800">
        <div class="article-column500">
		<%if (videourl.isEmpty()) {%>
	       	<img src="<%=videoimg%>"/>
	       	<%if (!videocaption.isEmpty()){ %>
	    		<div class="article--caption"><%=videocaption%></div>
			<%} %>
        <%} else {%>
        	<a href="<%=videourl%>" class="popup-youtube">
		        <span class="icon-play"></span>
		        <img src="<%=videoimg%>"/>
		        <%if (!videocaption.isEmpty()){ %>
		        <div class="article--caption"><%=videocaption%></div>
            	<%}%>
          	</a>
        <%}%>
        </div>
        <div class="article-column300">
          <%=videocopy%>
        </div>
      </div>
    </div>
  </section>
</div>
