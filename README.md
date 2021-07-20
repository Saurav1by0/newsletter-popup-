
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Saurav Newsletter</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<style>
body {
	font-family: 'Varela Round', sans-serif;
}	
.modal-newsletter {	
	color: #999;
	font-size: 15px;
  	min-width: 600px;
}
.modal-newsletter .modal-content {
	padding: 40px;
	border-radius: 0;		
	border: none;
}
.modal-newsletter .modal-header {
	border-bottom: none;   
	position: relative;
	text-align: center;
	border-radius: 5px 5px 0 0;
}
.modal-newsletter h4 {
	color: #000;
	text-align: center;
	font-size: 30px;
	margin: 0 0 25px;
	font-weight: bold;
	text-transform: capitalize;
}
.modal-newsletter .close {
	background: #c0c3c8;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    text-shadow: none;
    opacity: 0.5;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    font-size: 19px;
    text-align: center;
    padding: 0;
}
.modal-newsletter .close span {
	position: relative;
	top: -1px;
}
.modal-newsletter .close:hover {
	opacity: 0.8;
}
.modal-newsletter .icon-box {
	color: #7265ea;		
	display: inline-block;
	z-index: 9;
	text-align: center;
	position: relative;
	margin-bottom: 10px;
}
.modal-newsletter .icon-box i {
	font-size: 110px;
}
.modal-newsletter .form-control, .modal-newsletter .btn {
	min-height: 46px;
	border-radius: 3px; 
}
.modal-newsletter .form-control {
	box-shadow: none;
	border-color: #dbdbdb;
}
.modal-newsletter .form-control:focus {
	border-color: #7265ea;
	box-shadow: 0 0 8px rgba(114, 101, 234, 0.5);
}
.modal-newsletter .btn {
	color: #fff;
	border-radius: 4px;
	background: #7265ea;
	text-decoration: none;
	transition: all 0.4s;
	line-height: normal;
	padding: 6px 20px;
	min-width: 150px;
	border: none;
}
.modal-newsletter .btn:hover, .modal-newsletter .btn:focus {
	background: #4e3de4;
	outline: none;
}
.modal-newsletter .input-group {
	margin: 30px 0 15px;
}
.hint-text {
	margin: 100px auto;
	text-align: center;
}
</style>
<script>
$(document).ready(function(){
	$("#myModal").modal('show');
});
</script>
</head>
<body>
<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-newsletter">
		<div class="modal-content">
			<form action="/" method="POST ">
				<div class="modal-header">
					<div class="icon-box mx-auto">						
						<i class="fa fa-envelope-open-o"></i>
					</div>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span>&times;</span></button>
				</div>
				<div class="modal-body text-center">
					<h4>Subscribe to Saurav's newsletter</h4>	
					<p>Join my subscribers list to get the latest news, updates and special offers delivered directly in your inbox.</p>
					<div class=" form-group  justify-content-center">
                        <input name="fName" type="text" class="form-control w-50 mb-2" placeholder="First Name" required>
						<input name="lName" type="text" class="form-control w-50 mb-2" placeholder="Last Name" required>
						<input name="email" type="email" class="form-control w-75 mb-2" placeholder="Enter your email" required>
						<div class="input-group-append">
							<input type="submit" class="btn btn-primary" value="Subscribe">
						</div>
					</div>
				</div>
			</form>			
		</div>
	</div>
</div>
<p class="hint-text"><strong>Note:</strong> Please refresh the page or run the code to reload the modal.</p>
</body>
</html>
