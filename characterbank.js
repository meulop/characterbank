var listCharDataChanges = function(summaries) {
    console.log(summaries);	
}

var summ = new MutationSummary({
	callback: listCharDataChanges,
	rootNode: $('#tweet-box-home-timeline div')[0],
	queries: [
	{characterData: true }
	]
});

