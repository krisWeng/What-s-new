//导航栏第一个二级菜单
var secondMenuOne = [
				{
					"Name": "Home – Portfolio"
				},
				{
					"Name": "Home – Slideshow"
				},
				{
					"Name": "Home – Video Intro"
				},
				{
					"Name": "Home – Custom Sections"
				}
			]

			$(function(){
				$.each(secondMenuOne,function(index,data){
					var secondOne=`<li><a href="#">${data.Name}</a></li>`; 
									console.log(secondOne);
					$('.TopNav-second-Menu-01').append(secondOne);
				})
			})

//导航栏三级菜单1
var thirdMenuOne = [
				{
					"Name": "Video Backgrounds"
				},
				{
					"Name": "Regular Scrolling"
				},
				{
					"Name": "Slideshows"
				},
				{
					"Name": "Custom Sections"
				},
				{
					"Name": "Portfolio Item"
				}
			]

			$(function(){
				$.each(thirdMenuOne,function(index,data){
					var thirdOne=`<li>
										<a href="#">${data.Name}</a>
									</li>`;
									console.log(thirdOne);
					$('.TopNav-third-Menu-01').append(thirdOne);
				})
			})
			
//导航栏三级菜单2
var thirdMenuTwo = [
				{
					"Name": "Minimal"
				},
				{
					"Name": "Grid"
				},
				{
					"Name": "Classic"
				}
			]

			$(function(){
				$.each(thirdMenuTwo,function(index,data){
					var thirdTwo=`<li>
										<a href="#">${data.Name}</a>
									</li>`;
									console.log(thirdTwo);
					$('.TopNav-third-Menu-02').append(thirdTwo);
				})
			})
			
//导航栏三级菜单3
var thirdMenuThree = [
				{
					"Name": "Grid"
				},
				{
					"Name": "Minimal"
				},
				{
					"Name": "Classic"
				}
			]

			$(function(){
				$.each(thirdMenuThree,function(index,data){
					var thirdThree=`<li>
										<a href="#">${data.Name}</a>
									</li>`;
									console.log(thirdThree);
					$('.TopNav-third-Menu-03').append(thirdThree);
				})
			})
			
//导航栏三级菜单4
var thirdMenuFour = [
				{
					"Name": "Elements"
				},
				{
					"Name": "Columns"
				}
			]

			$(function(){
				$.each(thirdMenuFour,function(index,data){
					var thirdFour=`<li>
										<a href="#">${data.Name}</a>
									</li>`;
									console.log(thirdFour);
					$('.TopNav-third-Menu-04').append(thirdFour);
				})
			})
			
//导航栏三级菜单5
var thirdMenuFive = [
				{
					"Name": "Page With Sidebar"
				},
				{
					"Name": "Page Without Sidebar"
				},
				{
					"Name": "Full Width Page"
				}
			]

			$(function(){
				$.each(thirdMenuFive,function(index,data){
					var thirdFive=`<li>
										<a href="html/Page-With-Sidebar.html">${data.Name}</a>
									</li>`;
									console.log(thirdFive);
					$('.TopNav-third-Menu-05').append(thirdFive);
				})
			})