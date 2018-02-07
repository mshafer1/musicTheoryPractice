function check()
{
	result = false;
	//build chord - sort Solfege??
	i = 0;
	solfege = ""
	for(j = 0; j < indexes[i]; j++)
	{
		solfege += $('#Result' + i + j).html() + ' '
	}
	solfege = solfege.trim();
	//console.log('Solfege: ' + solfege);
	
	i++;
	rn = ""
	for(j = 0; j < indexes[i]; j++)
	{		
		rn += $('#Result' + i + j).html() + ' '
	}
	rn = rn.trim();
	//console.log('RN: ' + rn);
	
	i++;
	fb = ""
	for(j = 0; j < indexes[i]; j++)
	{
		fb += $('#Result' + i + j).html() + ' '
	}
	fb = fb.trim();
	//console.log('FB: ' + fb);
	
	given_prompt = $('#prompt').html();
	
	space = dict[given_prompt]
	//console.log(typeof(space))
	//console.log(space)
	values = Object.keys(space).length
	for (i = 0; i < values; i++)
	{
		//console.log(space[i])
		//console.log(space[i]['Solfege'])
		//console.log(space[i]['RN'])
		//console.log(space[i]['FB'])
		
		if(space[i]['Solfege'].localeCompare(solfege) == 0 &&
			space[i]['RN'].localeCompare(rn) == 0 &&
			space[i]['FB'].localeCompare(fb) == 0
		)
		{
			result = true;
			//console.log('Match!')
		}
	}
	
	return result;
	//space.foreach(function(input){console.log(input)});
}

var dict = 0;
$.get('answers.html', function(result) 
			{
				// var COMMENT_PSEUDO_COMMENT_OR_LT_BANG = new RegExp(
				// '<!--[\\s\\S]*?(?:-->)?'
				// + '<!---+>?'  // A comment with no body
				// + '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?'
				// + '|<[?][^>]*>?',  // A pseudo-comment
				// 'g');
				// data = result.replace(COMMENT_PSEUDO_COMMENT_OR_LT_BANG,'');
				// dict = JSON.parse(data);
				dict = JSON.parse(result);
				//console.log(dict);
			});


