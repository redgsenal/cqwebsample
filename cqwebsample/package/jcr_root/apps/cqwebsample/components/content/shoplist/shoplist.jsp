<%--

  Article Video component.

--%>
<%@include file="/apps/cqwebsample/global/global.jsp"%>
<%@page import="com.cqwebsample.web.common.utils.HelperUtils"%>
<%@page import="com.cqwebsample.web.common.model.component.ShopItem"%>
<%@page import="java.util.ArrayList"%>
<%@page session="false"%>
<%
	ArrayList<ShopItem> shops = HelperUtils.getShopItems(properties.get("shoplist", new String[0]));
%>
<div class="page-wrapper">
  <section class="component-padding-btm-small">
    <div class="component-module page-container">
      <div class="article page-container-800">
        <div class="article-column500">
        	<div id="map"></div>
        </div>
        <div class="article-column300">
        </div>
      </div>
    </div>
  </section>
</div>
<script>
$(function(){
<%	for(ShopItem s : shops) {
		String[] loc = s.getShopLocation().split(",");
 		String lat = loc[0];
 		String lng = loc[1];
		%>
	addMarker('<%=s.getShopName()%>', <%=lat%>, <%=lng%>, '<%=s.getShopAddress()%>', '<%=s.getShopPhone()%>');
<% 	} %>
});
</script>
