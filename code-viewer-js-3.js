/*
 *	In The Name Of God
 *	javaSnake Official WebSite
 *	File: code-viewer.js
 *	By  : SMRSAN
 */
S(function(){
	
	S(".javasnake-code-box-js-3 > pre").each(function(){
		
		var cv     = this,
			lines  = cv.innerHTML.split(/\n/),
			result = "",
			commentL  = false,
			commentML = false,
			quote     = false,
			dquote    = false,
			opStyle   = "color: #d0d", //Operators Color
			qteStyle  = "color: #0c0", //Quotes Color
			dqteStyle = "color: #00f", //Double Quotes Color
			brckStyle = "color: #e90", //Brackets Color
			commStyle = "color: #888", //Comments Color
			keywStyle = "color: #05f", //KeyWords Color
			regStyle  = "color: #90d"; //RegExps Color
		
		for(var i=0; i<lines.length; i++){// For Each Line
			
			commentL = false;
			
			var ln = lines[i];
			
			/*if(commentML)   result += "<span style='" + commStyle + "' >";
			else if(quote)  result += "<span style='" + qteStyle + "' >";
			else if(dquote) result += "<span style='" + dqteStyle + "' >";*/
			
			for(var j=0; j<ln.length; j++){// For Each Character
				
				switch(ln[j]){
					
					case '<':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >&lt;</span>";
							
						} else { result += "&lt;" }
						
					break;
					case '>':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >&gt;</span>";
							
						} else { result += "&gt;" }
						
					break;
					case '&':
						
						var num = 0;
						
						if(!commentL && !commentML && !quote && !dquote){
							
							if(ln[j+1] == 'l' && ln[j+2] == 't'){
								
								num = 3;
								
								result += "<span style='" + opStyle + "' >&lt;</span>";
								
							} else if(ln[j+1] == 'g' && ln[j+2] == 't'){
								
								num = 3;
								
								result += "<span style='" + opStyle + "' >&gt;</span>";
								
							} else {
								
								num = 4;
								
								result += "<span style='" + opStyle + "' >&amp;</span>";
								
							}
							
						} else { //Without Any Color
							
							if(ln[j+1] == 'l' && ln[j+2] == 't'){
								
								num = 3;
								
								result += "&lt;";
								
							} else if(ln[j+1] == 'g' && ln[j+2] == 't'){
								
								num = 3;
								
								result += "&gt;";
								
							} else {
								
								num = 4;
								
								result += "&amp;";
								
							}
							
						}
						
						j += num;
						
					break;
					case '(':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >(</span>";
							
						} else { result += "(" }
						
					break;
					case ')':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >)</span>";
							
						} else { result += ")" }
						
					break;
					case '{':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >{</span>";
							
						} else { result += "{" }
						
					break;
					case '}':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >}</span>";
							
						} else { result += "}" }
						
					break;
					case '[':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >[</span>";
							
						} else { result += "[" }
						
					break;
					case ']':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + brckStyle + "' >]</span>";
							
						} else { result += "]" }
						
					break;
					case ',':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >,</span>";
							
						} else { result += "," }
						
					break;
					case '.':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >.</span>";
							
						} else { result += "." }
						
					break;
					case '|':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >|</span>";
							
						} else { result += "|" }
						
					break;
					case "?":
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >?</span>";
							
						} else { result += "?" }
						
					break;
					case '!':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >!</span>";
							
						} else { result += "!" }
						
					break;
					case '=':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >=</span>";
							
						} else { result += "=" }
						
					break;
					case '-':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >-</span>";
							
						} else { result += "-" }
						
					break;
					case '+':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >+</span>";
							
						} else { result += "+" }
						
					break;
					case '%':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >%</span>";
							
						} else { result += "%" }
						
					break;
					case '*':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >*</span>";
							
						} else { result += "*" }
						
					break;
					case '/':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							if(ln[j+1] == '/'){
								
								commentL = true;
								result  += "<span style='" + commStyle + "' >/";
								
							} else if(ln[j+1] == '*'){
								
								commentML = true;
								result   += "<span style='" + commStyle + "' >/";
								
							} else {

								var regFlag  = false,
									regChars = ln[j] + ln[j+1];

								for(var k=j+2; k<ln.length; k++){

									if(ln[k] != '/'){
										regChars += ln[k];
									} else {
										if(ln[k-1] != '\\'){
											regChars += ln[k];
											regFlag = true;
											break;
										} else {
											regChars += ln[k];
										}
									}

								}

								if(regFlag){
									result += "<span style='" + regStyle + "' >" + regChars + "</span>";
									j += regChars.length-1;
								} else {
									result   += "<span style='" + opStyle + "' >/</span>";
								}
								
							}
							
						} else {
							
							if(ln[j-1] == '*' && commentML){
								commentML = false;
								result += "/</span>";
							}
							else result += "/";
							
						}
						
					break;
					case "'":
						
						if(!commentL && !commentML && !dquote){
							
							if(!quote){
								quote = true;
								result += "<span style='" + qteStyle + "' >'";
							} else {
								//BackSlash Check
								let lastCharNum = 1,
									isSlashFlag = false;
								while(ln[j-lastCharNum] == '\\'){
									
									isSlashFlag = (isSlashFlag)? false:true;
									lastCharNum++;
									
								}
								if(!isSlashFlag){
									quote = false;
									result += "'</span>";
								} else {
									result += "'";
								}
							}
							
						} else {
							
							result += "'";
							
						}
						
					break;
					case '"':
						
						if(!commentL && !commentML && !quote){
							
							if(!dquote){
								dquote = true;
								result += '<span style="' + dqteStyle + '" >"';
							} else {
								//BackSlash Check
								let lastCharNum = 1,
									isSlashFlag = false;
								while(ln[j-lastCharNum] == '\\'){
									
									isSlashFlag = (isSlashFlag)? false:true;
									lastCharNum++;
									
								}
								if(!isSlashFlag){
									dquote = false;
									result += '"</span>';
								} else {
									result += '"';
								}
							}
							
						} else {
							
							result += '"';
							
						}
						
					break;
					case '^':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >^</span>";
							
						} else { result += "^" }
						
					break;
					case ':':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >:</span>";
							
						} else { result += ":" }
						
					break;
					case ';':
						
						if(!commentL && !commentML && !quote && !dquote){
							
							result += "<span style='" + opStyle + "' >;</span>";
							
						} else { result += ";" }
						
					break;
					case ' ':
					
						result += "&nbsp;";
						
					break;
					case '	':
					
						result += "&nbsp;&nbsp;&nbsp;&nbsp;";
						
					break;
					default:
						
						if(!commentL && !commentML && !quote && !dquote){
							
							switch(ln[j]){//KeyWords Switch
								
								case 'a':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'b' &&
										ln[j+2] == 's' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'r' &&
										ln[j+5] == 'a' &&
										ln[j+6] == 'c' &&
										ln[j+7] == 't' &&
										code_keyword(ln[j+8])){//abstract KeyWord
										
										result += "<span style='" + keywStyle + "' >abstract</span>";
										
										j += 7;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'b':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'o' &&
										ln[j+3] == 'l' &&
										ln[j+4] == 'e' &&
										ln[j+5] == 'a' &&
										ln[j+6] == 'n' &&
										code_keyword(ln[j+7])){//boolean KeyWord
										
										result += "<span style='" + keywStyle + "' >boolean</span>";
										
										j += 6;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'r' &&
										ln[j+2] == 'e' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 'k' &&
										code_keyword(ln[j+5])){//break KeyWord
										
										result += "<span style='" + keywStyle + "' >break</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'y' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'e' &&
										code_keyword(ln[j+4])){//byte KeyWord
										
										result += "<span style='" + keywStyle + "' >byte</span>";
										
										j += 3;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'c':
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 's' &&
										ln[j+3] == 'e' &&
										code_keyword(ln[j+4])){//case KeyWord
										
										result += "<span style='" + keywStyle + "' >case</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'c' &&
										ln[j+4] == 'h' &&
										code_keyword(ln[j+5])){//catch KeyWord
										
										result += "<span style='" + keywStyle + "' >catch</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'h' &&
										ln[j+2] == 'a' &&
										ln[j+3] == 'r' &&
										code_keyword(ln[j+4])){//char KeyWord
										
										result += "<span style='" + keywStyle + "' >char</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'l' &&
										ln[j+2] == 'a' &&
										ln[j+3] == 's' &&
										ln[j+4] == 's' &&
										code_keyword(ln[j+5])){//class KeyWord
										
										result += "<span style='" + keywStyle + "' >class</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 's' &&
										ln[j+4] == 't' &&
										code_keyword(ln[j+5])){//const KeyWord
										
										result += "<span style='" + keywStyle + "' >const</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'i' &&
										ln[j+5] == 'n' &&
										ln[j+6] == 'u' &&
										ln[j+7] == 'e' &&
										code_keyword(ln[j+8])){//continue KeyWord
										
										result += "<span style='" + keywStyle + "' >continue</span>";
										
										j += 7;
										
									} else {
										
										result += ln[j];
										
									}
								break;
								case 'd':
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 'b' &&
										ln[j+3] == 'u' &&
										ln[j+4] == 'g' &&
										ln[j+5] == 'g' &&
										ln[j+6] == 'e' &&
										ln[j+7] == 'r' &&
										code_keyword(ln[j+8])){//debugger KeyWord
										
										result += "<span style='" + keywStyle + "' >debugger</span>";
										
										j += 7;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 'f' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 'u' &&
										ln[j+5] == 'l' &&
										ln[j+6] == 't' &&
										code_keyword(ln[j+7])){//default KeyWord
										
										result += "<span style='" + keywStyle + "' >default</span>";
										
										j += 6;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 'l' &&
										ln[j+3] == 'e' &&
										ln[j+4] == 't' &&
										ln[j+5] == 'e' &&
										code_keyword(ln[j+6])){//delete KeyWord
										
										result += "<span style='" + keywStyle + "' >delete</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										code_keyword(ln[j+2])){//do KeyWord
										
										result += "<span style='" + keywStyle + "' >do</span>";
										
										j += 1;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'u' &&
										ln[j+3] == 'b' &&
										ln[j+4] == 'l' &&
										ln[j+5] == 'e' &&
										code_keyword(ln[j+6])){//double KeyWord
										
										result += "<span style='" + keywStyle + "' >double</span>";
										
										j += 5;
										
									} else {
										
										result += ln[j];
										
									}
								break;
								case 'e':
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'l' &&
										ln[j+2] == 's' &&
										ln[j+3] == 'e' &&
										code_keyword(ln[j+4])){//else KeyWord
										
										result += "<span style='" + keywStyle + "' >else</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'n' &&
										ln[j+2] == 'u' &&
										ln[j+3] == 'm' &&
										code_keyword(ln[j+4])){//enum KeyWord
										
										result += "<span style='" + keywStyle + "' >enum</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'x' &&
										ln[j+2] == 'p' &&
										ln[j+3] == 'o' &&
										ln[j+4] == 'r' &&
										ln[j+5] == 't' &&
										code_keyword(ln[j+6])){//export KeyWord
										
										result += "<span style='" + keywStyle + "' >export</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'x' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'e' &&
										ln[j+4] == 'n' &&
										ln[j+5] == 'd' &&
										ln[j+6] == 's' &&
										code_keyword(ln[j+7])){//extends KeyWord
										
										result += "<span style='" + keywStyle + "' >extends</span>";
										
										j += 6;
										
									} else {
										
										result += ln[j];
										
									}
								break;
								case 'f':
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 'l' &&
										ln[j+3] == 's' &&
										ln[j+4] == 'e' &&
										code_keyword(ln[j+5])){//false KeyWord
										
										result += "<span style='" + keywStyle + "' >false</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'i' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 'l' &&
										code_keyword(ln[j+5])){//final KeyWord
										
										result += "<span style='" + keywStyle + "' >false</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'i' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 'l' &&
										ln[j+5] == 'l' &&
										ln[j+6] == 'y' &&
										code_keyword(ln[j+7])){//finally KeyWord
										
										result += "<span style='" + keywStyle + "' >finally</span>";
										
										j += 6;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'l' &&
										ln[j+2] == 'o' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 't' &&
										code_keyword(ln[j+5])){//float KeyWord
										
										result += "<span style='" + keywStyle + "' >finally</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'u' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 'c' &&
										ln[j+4] == 't' &&
										ln[j+5] == 'i' &&
										ln[j+6] == 'o' &&
										ln[j+7] == 'n' &&
										code_keyword(ln[j+8])){//function KeyWord
										
										result += "<span style='" + keywStyle + "' >function</span>";
										
										j += 7;
										
									} else if( code_keyword(ln[j-1]) &&
											   ln[j+1] == 'o' &&
											   ln[j+2] == 'r' &&
											   code_keyword(ln[j+3])){//for KeyWord
										
										result += "<span style='" + keywStyle + "' >for</span>";
										
										j += 2;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'g':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'o' &&
										code_keyword(ln[j+4])){//goto KeyWord
										
										result += "<span style='" + keywStyle + "' >goto</span>";
										
										j += 3;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'i':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'f' &&
										code_keyword(ln[j+2])){//if KeyWord
										
										result += "<span style='" + keywStyle + "' >if</span>";
										
										j += 1;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'm' &&
										ln[j+2] == 'p' &&
										ln[j+3] == 'l' &&
										ln[j+4] == 'e' &&
										ln[j+5] == 'm' &&
										ln[j+6] == 'e' &&
										ln[j+7] == 'n' &&
										ln[j+8] == 't' &&
										ln[j+9] == 's' &&
										code_keyword(ln[j+10])){//implements KeyWord
										
										result += "<span style='" + keywStyle + "' >implements</span>";
										
										j += 9;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'm' &&
										ln[j+2] == 'p' &&
										ln[j+3] == 'o' &&
										ln[j+4] == 'r' &&
										ln[j+5] == 't' &&
										code_keyword(ln[j+6])){//import KeyWord
										
										result += "<span style='" + keywStyle + "' >import</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'n' &&
										code_keyword(ln[j+2])){//in KeyWord
										
										result += "<span style='" + keywStyle + "' >in</span>";
										
										j += 1;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'n' &&
										ln[j+2] == 's' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'a' &&
										ln[j+5] == 'n' &&
										ln[j+6] == 'c' &&
										ln[j+7] == 'e' &&
										ln[j+8] == 'o' &&
										ln[j+9] == 'f' &&
										code_keyword(ln[j+10])){//instanceof KeyWord
										
										result += "<span style='" + keywStyle + "' >instanceof</span>";
										
										j += 9;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'n' &&
										ln[j+2] == 't' &&
										code_keyword(ln[j+3])){//int KeyWord
										
										result += "<span style='" + keywStyle + "' >int</span>";
										
										j += 2;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'n' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'e' &&
										ln[j+4] == 'r' &&
										ln[j+5] == 'f' &&
										ln[j+6] == 'a' &&
										ln[j+7] == 'c' &&
										ln[j+8] == 'e' &&
										code_keyword(ln[j+9])){//interface KeyWord
										
										result += "<span style='" + keywStyle + "' >interface</span>";
										
										j += 8;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'l':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 'g' &&
										code_keyword(ln[j+4])){//long KeyWord
										
										result += "<span style='" + keywStyle + "' >long</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 't' &&
										code_keyword(ln[j+3])){//let KeyWord
										
										result += "<span style='" + keywStyle + "' >let</span>";
										
										j += 2;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'n':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'i' &&
										ln[j+4] == 'v' &&
										ln[j+5] == 'e' &&
										code_keyword(ln[j+6])){//native KeyWord
										
										result += "<span style='" + keywStyle + "' >native</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 'w' &&
										code_keyword(ln[j+3])){//new KeyWord
										
										result += "<span style='" + keywStyle + "' >new</span>";
										
										j += 2;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'u' &&
										ln[j+2] == 'l' &&
										ln[j+3] == 'l' &&
										code_keyword(ln[j+4])){//null KeyWord
										
										result += "<span style='" + keywStyle + "' >null</span>";
										
										j += 3;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'p':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 'c' &&
										ln[j+3] == 'k' &&
										ln[j+4] == 'a' &&
										ln[j+5] == 'g' &&
										ln[j+6] == 'e' &&
										code_keyword(ln[j+7])){//package KeyWord
										
										result += "<span style='" + keywStyle + "' >package</span>";
										
										j += 6;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'r' &&
										ln[j+2] == 'i' &&
										ln[j+3] == 'v' &&
										ln[j+4] == 'a' &&
										ln[j+5] == 't' &&
										ln[j+6] == 'e' &&
										code_keyword(ln[j+7])){//private KeyWord
										
										result += "<span style='" + keywStyle + "' >private</span>";
										
										j += 6;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'r' &&
										ln[j+2] == 'o' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'e' &&
										ln[j+5] == 'c' &&
										ln[j+6] == 't' &&
										ln[j+7] == 'e' &&
										ln[j+8] == 'd' &&
										code_keyword(ln[j+9])){//protected KeyWord
										
										result += "<span style='" + keywStyle + "' >protected</span>";
										
										j += 8;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'u' &&
										ln[j+2] == 'b' &&
										ln[j+3] == 'l' &&
										ln[j+4] == 'i' &&
										ln[j+5] == 'c' &&
										code_keyword(ln[j+6])){//public KeyWord
										
										result += "<span style='" + keywStyle + "' >public</span>";
										
										j += 5;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'r':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'e' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'u' &&
										ln[j+4] == 'r' &&
										ln[j+5] == 'n' &&
										code_keyword(ln[j+6])){//return KeyWord
										
										result += "<span style='" + keywStyle + "' >return</span>";
										
										j += 5;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 's':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'h' &&
										ln[j+2] == 'o' &&
										ln[j+3] == 'r' &&
										ln[j+4] == 't' &&
										code_keyword(ln[j+5])){//short KeyWord
										
										result += "<span style='" + keywStyle + "' >short</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 't' &&
										ln[j+2] == 'a' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'i' &&
										ln[j+5] == 'c' &&
										code_keyword(ln[j+6])){//static KeyWord
										
										result += "<span style='" + keywStyle + "' >static</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'u' &&
										ln[j+2] == 'p' &&
										ln[j+3] == 'e' &&
										ln[j+4] == 'r' &&
										code_keyword(ln[j+5])){//super KeyWord
										
										result += "<span style='" + keywStyle + "' >super</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'w' &&
										ln[j+2] == 'i' &&
										ln[j+3] == 't' &&
										ln[j+4] == 'c' &&
										ln[j+5] == 'h' &&
										code_keyword(ln[j+6])){//switch KeyWord
										
										result += "<span style='" + keywStyle + "' >switch</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'y' &&
										ln[j+2] == 'n' &&
										ln[j+3] == 'c' &&
										ln[j+4] == 'h' &&
										ln[j+5] == 'r' &&
										ln[j+6] == 'o' &&
										ln[j+7] == 'n' &&
										ln[j+8] == 'i' &&
										ln[j+9] == 'z' &&
										ln[j+10] == 'e' &&
										ln[j+11] == 'd' &&
										code_keyword(ln[j+12])){//synchronized KeyWord
										
										result += "<span style='" + keywStyle + "' >synchronized</span>";
										
										j += 11;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 't':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'h' &&
										ln[j+2] == 'i' &&
										ln[j+3] == 's' &&
										code_keyword(ln[j+4])){//this KeyWord
										
										result += "<span style='" + keywStyle + "' >this</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'h' &&
										ln[j+2] == 'r' &&
										ln[j+3] == 'o' &&
										ln[j+4] == 'w' &&
										ln[j+5] == 's' &&
										code_keyword(ln[j+6])){//throws KeyWord
										
										result += "<span style='" + keywStyle + "' >throws</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'r' &&
										ln[j+2] == 'a' &&
										ln[j+3] == 'n' &&
										ln[j+4] == 's' &&
										ln[j+5] == 'i' &&
										ln[j+6] == 'e' &&
										ln[j+7] == 'n' &&
										ln[j+8] == 't' &&
										code_keyword(ln[j+9])){//transient KeyWord
										
										result += "<span style='" + keywStyle + "' >transient</span>";
										
										j += 8;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'r' &&
										ln[j+2] == 'u' &&
										ln[j+3] == 'e' &&
										code_keyword(ln[j+4])){//true KeyWord
										
										result += "<span style='" + keywStyle + "' >true</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'y' &&
										ln[j+2] == 'p' &&
										ln[j+3] == 'e' &&
										ln[j+4] == 'o' &&
										ln[j+5] == 'f' &&
										code_keyword(ln[j+6])){//typeof KeyWord
										
										result += "<span style='" + keywStyle + "' >typeof</span>";
										
										j += 5;
										
									} else if( code_keyword(ln[j-1]) &&
											   ln[j+1] == 'r' &&
										       ln[j+2] == 'y' &&
											   code_keyword(ln[j+3])){//try KeyWord
										
										result += "<span style='" + keywStyle + "' >try</span>";
										
										j += 2;
										
									} else if( code_keyword(ln[j-1]) &&
											   ln[j+1] == 'h' &&
											   ln[j+2] == 'r' &&
											   ln[j+3] == 'o' &&
											   ln[j+4] == 'w' &&
											   code_keyword(ln[j+5])){//throw KeyWord
										
										result += "<span style='" + keywStyle + "' >throw</span>";
										
										j += 4;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'v':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'a' &&
										ln[j+2] == 'r' &&
										code_keyword(ln[j+3])){//var KeyWord
										
										result += "<span style='" + keywStyle + "' >var</span>";
										
										j += 2;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'i' &&
										ln[j+3] == 'd' &&
										code_keyword(ln[j+4])){//void KeyWord
										
										result += "<span style='" + keywStyle + "' >void</span>";
										
										j += 3;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'o' &&
										ln[j+2] == 'l' &&
										ln[j+3] == 'a' &&
										ln[j+4] == 't' &&
										ln[j+5] == 'i' &&
										ln[j+6] == 'l' &&
										ln[j+7] == 'e' &&
										code_keyword(ln[j+8])){//volatile KeyWord
										
										result += "<span style='" + keywStyle + "' >volatile</span>";
										
										j += 7;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								case 'w':
									
									if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'h' &&
										ln[j+2] == 'i' &&
										ln[j+3] == 'l' &&
										ln[j+4] == 'e' &&
										code_keyword(ln[j+5])){//while KeyWord
										
										result += "<span style='" + keywStyle + "' >while</span>";
										
										j += 4;
										
									} else if( code_keyword(ln[j-1]) &&
										ln[j+1] == 'i' &&
										ln[j+2] == 't' &&
										ln[j+3] == 'h' &&
										code_keyword(ln[j+4])){//with KeyWord
										
										result += "<span style='" + keywStyle + "' >with</span>";
										
										j += 3;
										
									} else {
										
										result += ln[j];
										
									}
									
								break;
								default:
									
									result += ln[j];
									
								break;
								
							}//End Of KeyWords Switch
							
						} else {
							
							result += ln[j];
							
						}
						
					break;
					
				}
				
			} //End Of Character Loop
			
			if(commentL){
				
				result += "</span><br/>";
				
			} else result += "<br/>";
			
		} //End Of Lines Loop
		
		var code_viewer_2 = S('$new','div');
		
		S(code_viewer_2)
		.attr('class','javasnake-code-view-js-3');
		
		code_viewer_2.innerHTML = result;
		
		S(cv)
		.css({
			display: "none"
		})
		.after(code_viewer_2);
		
		
		//Put Line Numbers
		var code_line_nums = S('$new','div');
		
		code_line_nums.setAttribute("class","javasnake-code-line-nums-3");
		
		var codeLineNums = 1,
			numsResult   = "";
		for(var i=0; i<lines.length; i++){
			
			numsResult += "<span>" + codeLineNums + "</span>";
			codeLineNums++;
			
		}
		code_line_nums.innerHTML = numsResult;
		
		S(cv)
		.after(code_line_nums);
		
	});
	//A Function For Toggling Code Styles
	function code_keyword(ch){
		
		if(ch == null) return true;
		else
			if(ch.search(/\w/) == -1)return true;
			else return false;
		
	}
});