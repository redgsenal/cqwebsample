<%@include file="/apps/cqwebsample/global/global.jsp"%>
<%@page session="false" %>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><%= xssAPI.encodeForHTML( currentPage.getTitle() == null ? currentPage.getName() : currentPage.getTitle() ) %></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <cq:include script="/libs/wcm/core/components/init/init.jsp"/>
        <cq:includeClientLib categories="cq.cqwebsample" />
    </head>