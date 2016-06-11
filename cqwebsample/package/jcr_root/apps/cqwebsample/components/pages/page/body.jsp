<%@include file="/apps/cqwebsample/global/global.jsp"%>
<%@page session="false" %>
<body>
    <cq:include script="nav.jsp"/>
	<cq:include path="itoppar" resourceType="foundation/components/iparsys" />  
    <!-- Your HTML here -->
	<cq:include path="mainpar" resourceType="foundation/components/parsys" />
    <cq:include path="ibottompar" resourceType="foundation/components/iparsys" />
    <cq:include script="footer.jsp"/>
</body>