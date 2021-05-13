<?php

	$one = [
		['name' => 'hoa' , 'age' => 20],
		['name' => 'ho' , 'age' => 201],
		['name' => 'an' , 'age' => 220],
		['name' => 'hạnh' , 'age' => 120],
		['name' => 'hoa' , 'age' => 420],
	];

	foreach ($one as $two) {
		//echo $two['name'] . ' - ' . $two['age'] . '<br />';
		//echo $two;
	}
	$i=0;
	while ($i < count($one)) {
	    echo $one[$i]['name'] . '<br />';
	    $i++;
	}
?>

<!DOCTYPE html>
<html>
<head>
</head>	
<body>
<ul>
 	<?php foreach ($one as $two) { ?>
 		<h3> <?php echo $two['name']; ?> </h3>
 		<p> <?php echo $two['age']; ?> tuổi </p>
 	<?php } ?>
</ul>	
</body>
</html>