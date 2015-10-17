<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<html ng-app="githubApp">
   <head>
      <title>Github charts API</title>
      <tiles:insertAttribute name="assets"></tiles:insertAttribute>
   </head>
   <body>
      <tiles:insertAttribute name="body" />
      <br/>
      <tiles:insertAttribute name="footer" />
   </body>
</html>