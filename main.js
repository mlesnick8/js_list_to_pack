$( document ).ready(function() {
	//Step one click button
	//Step two hide button on click
	//Step three change item text

	$('button').on("click", (e) => { 
	let id = e.target.id
	let selected_list_text = $(`#list-${id}`).text()
	let each_word = selected_list_text.split(' ')
	console.log(each_word)
	console.log(each_word.length)
	let list_text = each_word.length == 3 ? `${each_word[0]} ${each_word[1]}` : `${each_word[0]}`

	$(`#list-${id}`).html(`${list_text} has been packed ;) <button>Packed</button>`)
	console.log(list_text)
	})
});

// If the length og the each_word array is equal to 3, return the value at position 0 and 1
// Otherwise return the value at position 0