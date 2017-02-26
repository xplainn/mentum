jQuery(document).ready(function($) {
	var $sl=$('.first .inner ul');
	var snum=$('.first .inner li').length;
	var ea=$sl.width()/snum;
	var $poi=$('.first .bg2 li');
	var i=0;
	$poi.eq(i).css('background', '#192c3b');
	var $l=$('.first .float>.rl');
	var $r=$('.first .float>.rr');
	$l.click(function(event) {
		i++;
		clearInterval(null);
		if(i>snum-1)
		{
			$sl.animate({'left':'0px'}, 1000);
			i=0;
		}
		$sl.animate({'left':'-='+ea+'px'}, 1000);
	});


	$r.click(function(event) {
		i--;
		clearInterval(null);
		if(i<0)
		{
			i=snum-1;
			$sl.animate({'left':-1708+'px'}, 1000);
		}
		$sl.animate({'left':'+='+ea+'px'}, 1000);
	});

	if(i>snum-1)
	{
		$sl.animate({'left':'0px'}, 1000);
			i=0;
	}
	if(i<0)
	{
		i=snum-1;
			$sl.animate({'left':-1708+'px'}, 1000);
	}
	setInterval(function() {
		// $poi.eq(i).css('background', '#192c3b');
		// $poi.eq(i).css('background', 'white').next().css('background', '#192c3b');
		i++;

		if(i>snum-1)
		{

			$sl.animate({'left':'0px'}, 1000);
			i=0;
		}
		else
		{
			// $poi.eq(i).css('background', 'white').next().css('background', '#192c3b');
			$sl.animate({'left':'-='+ea+'px'}, 1000);
		}
		$poi.eq(i).css('background', '#192c3b');
	},3000);
	
 });