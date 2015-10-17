<div class="container">
	<div class="panel panel-success">
		<div class="panel-heading">Create Github repository test</div>
		<div class="panel-body">
			<form ng-controller="githubCtrl">
				<div class="form-group">
					<label>Repository name:</label> <input type="text" class="form-control" ng-model="name" />
				</div>
				<div class="form-group">
					<label>Credentials:</label> <input type="text" class="form-control" ng-model="credentials" />
				</div>
				<input type="submit" class="btn btn-block btn-success"
					value="Create" />
			</form>
		</div>
	</div>