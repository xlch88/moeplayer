var moeplayer = {
	config: {},
	audio: null,
	video: null,
	
	helper:{
		makeUUID(){
			
		}
	},
	
	init(config){
		this.config = config;
		this.audio = new Auido;
		this.video = document.createElement("VIDEO");
	},
	
	list:{
		store:{},
		
		add(listInfo){
			
		},
		
		remove(){
			
		},
		
		addMusic(){
			
		},
		
		deleteMusic(){
			
		}
	},
	
	controller:{
		nowElement:null,
		
		play(){
			
		},
		
		pause(){
			
		},
		
		setMusic(){
			
		},
		
		setPlayType(){
			
		},
		
		next(){
			
		},
		
		last(){
			
		},
		
		muted(){
			
		},
		
		volume(){
			
		},
		
		time(){
			
		},
		
		src(){
			
		},
		
		playbackRate(){
			
		}
	},
	
	assetsParser:{
		parsers:{},
		
		add(){
			
		}
	}
};