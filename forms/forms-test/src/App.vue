<template>
	<div id="app">
		<h1>File a claim</h1>
		<div class="content">
			<form class="panel">
				<div class="header">Form</div>
				<LabelApp name="E-mail">
					<input type="text" v-model.lazy.trim="user.email">
				</LabelApp>
				<LabelApp name="Password">
					<input type="password" v-model="user.password">
				</LabelApp>
				<LabelApp name="Age">
					<input type="number" v-model.number="user.age">
				</LabelApp>
				<LabelApp name="Message">
					<textarea name="" cols="30" rows="5" v-model="message"></textarea>
				</LabelApp>
				<LabelApp name="Problem Characteristics">
					<span class="mr-4">
						<input type="checkbox" 
							   value="reproducible" 
							   v-model="features"> Reproducible
					</span>
					<span>
						<input type="checkbox" 
							   value="intermittent" 
							   v-model="features"> Intermittent
					</span>
				</LabelApp>
				<LabelApp name="Which product?">
					<span class="mr-4">
						<input type="radio" value="web" v-model="product"> Web
					</span>
					<span class="mr-4">
						<input type="radio" value="mobile" v-model="product"> Mobile
					</span>
					<span>
						<input type="radio" value="other" v-model="product"> Other
					</span>
				</LabelApp>
				<LabelApp name="Priority">
					<select name="" id="">
						<option></option>
					</select>
				</LabelApp>
				<LabelApp name="First Complaint?">
					<Choice />
				</LabelApp>
				<hr>
				<button>Send</button>
			</form>
			<div class="panel">
				<div class="header">Result</div>
				<LabelApp name="E-mail">
					<span>{{user.email}}</span>
				</LabelApp>
				<LabelApp name="Password">
					<span>{{user.password}}</span>
				</LabelApp>
				<LabelApp name="Age">
					<span>{{user.age}}</span>
				</LabelApp>
				<LabelApp name="Message">
					<span style="white-space: pre;">{{ message }}</span>
				</LabelApp>
				<LabelApp name="Check Options">
					<span>
						<ul>
							<li v-for="c in features" :key="c">{{ c }}</li>
						</ul>
					</span>
				</LabelApp>
				<LabelApp name="Which product?">
					<span>{{product}}</span>
				</LabelApp>
				<LabelApp name="Priority">
					<span>???</span>
				</LabelApp>
				<LabelApp name="First Complaint?">
					<span>???</span>
				</LabelApp>
			</div>
		</div>
	</div>
</template>

<script>
import LabelApp from './components/LabelApp.vue'
import Choice from './components/Choice.vue'

export default {
	name: 'app',
	components: { LabelApp, Choice },
	data() {
		return {
			message: '',
			features: [],
			product: "web",
			user: {
				email: '',
				password: '',
				age: 25
			}
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.content {
	display: flex;
}

.panel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.panel .header {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
