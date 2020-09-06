var moeplayer = {
	config:{},
	audio:null,
	video:null,
	
	/**
	 * 设置配置信息
	 * 
	 * @param object config 配置信息
	 * @return null
	 */
	setConfig(config){
		this.config = config;
	},
	
	/**
	 * 初始化
	 * 
	 * @return null
	 */
	init(){
		this.audio = new Audio();
		this.video = document.createElement('VIDEO')
	},
	
	//歌单部分
	list:{
		//设置
		setList(){
			
		},
		//添加歌单
		addList(){
			
		},
		//添加歌单内歌曲
		addMusic(){
			
		},
		//删除歌单
		deleteList(){
			
		}
		//删除歌单内歌曲
		deleteMusic(){
			
		}
	}
	
	//播放控制
		//播放
		//暂停
		//获取当前播放信息
		//
	
	
	//事件监听注册
	
};