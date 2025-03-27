let main = document.getElementById("main")
let time = document.getElementById("time")
let selction = document.getElementById("selction")
let image = document.getElementById("img1")

setInterval(() => {
	let date = new Date().toLocaleTimeString();
	time.textContent = date;
}, 1000);


let selc1 = document.createElement("select")
let opt1 = document.createElement("option")
opt1.hidden = true; opt1.selected = true
opt1.textContent = "Hour";
selc1.appendChild(opt1)
for(let i = 1; i < 13 ;i++){
    let opt = document.createElement("option")
	opt.value = i
	opt.textContent = i
	selc1.appendChild(opt)
}
selction.appendChild(selc1)



let selc2 = document.createElement("select")
let opt2 = document.createElement("option")
opt2.hidden = true; opt2.selected = true
opt2.textContent = "Minute";
selc2.appendChild(opt2)
for(let i = 1; i < 61 ;i++){
    let opt = document.createElement("option")
	opt.value = i
	opt.textContent = i
	selc2.appendChild(opt)
}
selction.appendChild(selc2)



let selc3 = document.createElement("select")
let opt3 = document.createElement("option")
opt3.hidden = true; opt3.selected = true
opt3.textContent = "AM/PM";
selc3.appendChild(opt3)
let pm = document.createElement("option")
let am = document.createElement("option")
pm.value = "PM"
am.value = "AM"
pm.textContent = "PM"
am.textContent = "AM"
selc3.appendChild(pm)
selc3.appendChild(am)
selction.appendChild(selc3)

let sound = document.createElement("select")
let Title = document.createElement("option")
let p1 = document.createElement("option")
let p2 = document.createElement("option")
sound.className = "Title"
Title.textContent = "Choose the tone"
Title.hidden = true
p1.value = "elpolpol.mp3"
p2.value = "3adel_shakel.mp3"
p1.textContent = "البولبول"
p2.textContent = "عادل شكل"
sound.appendChild(Title)
sound.appendChild(p1)
sound.appendChild(p2)
main.appendChild(sound)

let btn = document.createElement("button")
btn.textContent = "Set Alarm"
btn.className = "btn"

main.appendChild(btn)

let status = false;
let timer;
btn.addEventListener("click", () => {
	let hour = selc1.value;
	let minute = selc2.value;
	let AM_PM = selc3.value;
	let SRC = "../music/"+sound.value
	let zero;
	minute.toString().length === 1 ? zero = "0" : zero = ""
	console.log(`${hour.toString()}:${zero+minute.toString()}:00 ${AM_PM}`)
	console.log(SRC)
	timer = setInterval(() => {
		let now = new Date().toLocaleTimeString()
		if (now === `${hour.toString()}:${zero+minute.toString()}:00 ${AM_PM}`) {
			btn.classList.add("stop")
			image.classList.add("hez")
			let alarm = document.createElement("audio");
			alarm.src = SRC;
			main.appendChild(alarm);
			alarm.play();
			alarm.loop = true
			btn.textContent = "STOP";
			status = true;
			console.log(status)
		}
	}, 1000);
});


btn.addEventListener("click",() => {
	if (status === true) {
		clearInterval(timer);
		let alarm = document.querySelector("audio");
		alarm.remove();
		status = false;
		btn.textContent = "Set Alarm";
		console.log(status)
		btn.classList.remove("stop")
		image.classList.remove("hez")
	}
});