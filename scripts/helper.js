var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img"></div>';

var skills_array = ['2','3','4','5','6','7','8','9','10'];

var skills_new = '';

for(var i=0; i<skills_array.length; i++)
{

	skills_new = skills.replace('%data%',skills_array[i]);
	$('.skills-section-images').append(skills_new);

}
