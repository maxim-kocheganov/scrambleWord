var process = {
    processText : function(text) {
        var splitted = text.split(' ');
        var processed = "";
        for (var i = 0;i < splitted.length;i++){
            processed += process.scrambleWord(splitted[i]);
            if (i < splitted.length + 1)
                processed += " ";
        }
        return processed;
    },
    randomInt : function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    scrambleWord : function(word) {
        var start = 0;
        var end = word.length - 1;
        var result = "";
        if (start < end) 
        {        
            var splitted = word.split("");
            result += splitted[start];
            for (var i = start + 1; i < end; i++)
            {
                var random = process.randomInt(start + 1,end - 1);
                var charSwap = splitted[i];
                splitted[i] = splitted[random];
                splitted[random] = charSwap;                  
            }
            for(var i = start + 1; i < end; i++)
            {
                result += splitted[i];
            }
            result += splitted[end];
            return result;
        }
        else 
        {
            return word;
        }
        
    }
}
var bounds = {
    onPageInit : function() {
        document.getElementById("jsWarning").remove();
        document.getElementById("changeButton").onclick = bounds.onClick;
        console.log("data bounded");
    },
    getText : function() {
        return document.getElementById("inputField").value;
    },
    setText : function(text) {
        document.getElementById("outputField").value = text;
    },
    onClick : function() {
        bounds.setText(process.processText(bounds.getText()));
    }
};