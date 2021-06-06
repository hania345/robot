/*
The case of the Python Syndicate
Stage 2


Officer: 1680135
CaseNum: 301-1-64171211-1680135

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var pawel_karpinski_image;
var countess_hamilton_image;
var lina_lovelace_image;
var rocky_kray_image;
var anna_karpinski_image;
var cecil_karpinski_image;


var anna_karpinski_coordinate_x = 408;
var anna_karpinski_coordinate_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	lina_lovelace_image = loadImage("lina.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_image, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y);

	//image(pawel_karpinski_image, 115, 40);
	//image(countess_hamilton_image, 408, 40);
	//image(lina_lovelace_image, 701, 40);
	//image(rocky_kray_image, 115, 309);
	//image(cecil_karpinski_image, 701, 309);

}