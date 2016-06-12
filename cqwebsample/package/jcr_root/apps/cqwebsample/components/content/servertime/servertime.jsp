<%--

 Server Time component.

--%>
<%@include file="/apps/cqwebsample/global/global.jsp"%>
<%@page import="com.cqwebsample.web.common.utils.HelperUtils"%>
<%@page session="false"%>
<div class="page-wrapper">
  <section class="component-padding-btm-small">
    <div class="component-module page-container">
      <div class="article page-container-800">
        <div class="article-column500">
        	<h4>Examples of using OSGi.</h4>
        	<h4>Server time is</h4>
			<p>Directly using HelperUtil class: <%=HelperUtils.getServerTime()%></p>
			<p>Using AJAX call servlet: <span class="servertimevalue"></span></p>
        </div>
      </div>
    </div>
  </section>
</div>
