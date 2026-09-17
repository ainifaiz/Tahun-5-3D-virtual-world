// EDIT GURU: correctAnswer bermula pada 0 (A=0, B=1, C=2).
// x/z ialah lokasi NPC. Mata diberi SEKALI selepas refleksi disimpan.
export const missions=[
  {
    "id": "mei",
    "npc": "Mei Ling",
    "place": "Pasar Raya",
    "icon": "🛒",
    "topic": "Wang",
    "x": 24,
    "z": 4,
    "shirt": 15681391,
    "skin": 15779744,
    "longHair": true,
    "dialog": "Hai! Saya mahu membeli barang untuk aktiviti kelas. Tetapi saya tertarik melihat banyak barang yang cantik.",
    "question": "Kamu mempunyai RM20. Apakah tindakan yang paling sederhana?",
    "choices": [
      "Membelanjakan semua RM20 untuk membeli barang yang saya suka.",
      "Membeli barang yang diperlukan sahaja dan menyimpan baki wang.",
      "Membeli sebanyak mungkin kerana harganya murah."
    ],
    "correctAnswer": 1,
    "feedback": "Kita perlu berbelanja mengikut keperluan dan kemampuan. Sikap ini menunjukkan amalan kesederhanaan.",
    "feelingQuestion": "Bagaimanakah perasaan kamu apabila berjaya mengawal perbelanjaan?",
    "summary": "Berbelanja secara sederhana"
  },
  {
    "id": "aisyah",
    "npc": "Aisyah",
    "place": "Rumah Terbuka",
    "icon": "🍽️",
    "topic": "Makanan",
    "x": 0,
    "z": 25,
    "shirt": 11703259,
    "skin": 14066805,
    "longHair": true,
    "dialog": "Selamat datang ke rumah terbuka! Ada banyak makanan yang sedap.",
    "question": "Kamu melihat banyak makanan yang sedap. Berapa banyak patut kamu ambil?",
    "choices": [
      "Mengambil sebanyak mungkin walaupun belum tentu dapat menghabiskannya.",
      "Mengambil makanan secukupnya mengikut keperluan dan menambah jika masih lapar.",
      "Mengambil semua makanan kegemaran supaya orang lain tidak mengambilnya."
    ],
    "correctAnswer": 1,
    "feedback": "Mengambil makanan secukupnya dapat mengelakkan pembaziran dan memberi peluang kepada orang lain menikmati makanan.",
    "feelingQuestion": "Bagaimanakah perasaan kamu apabila mengambil makanan secara sederhana dan tidak membazir?",
    "summary": "Mengambil makanan secukupnya"
  },
  {
    "id": "ravi",
    "npc": "Ravi",
    "place": "Taman Rekreasi",
    "icon": "🌳",
    "topic": "Masa beriadah",
    "x": 0,
    "z": -23,
    "shirt": 440731,
    "skin": 10710347,
    "dialog": "Saya mahu bermain bola bersama kawan-kawan sepanjang petang. Tetapi saya juga perlu pulang untuk berehat dan menyiapkan tugasan.",
    "question": "Apakah tindakan yang menunjukkan kesederhanaan?",
    "choices": [
      "Bermain sehingga malam.",
      "Tidak mahu bermain langsung.",
      "Bermain untuk tempoh yang sesuai kemudian pulang untuk berehat dan menyelesaikan tugasan."
    ],
    "correctAnswer": 2,
    "feedback": "Kita boleh beriadah tetapi perlu mengurus masa dengan seimbang.",
    "feelingQuestion": "Apakah perasaan kamu apabila dapat membahagikan masa dengan baik?",
    "summary": "Mengurus masa beriadah"
  },
  {
    "id": "teck",
    "npc": "Teck Seng",
    "place": "Pusat Internet",
    "icon": "💻",
    "topic": "Teknologi",
    "x": 0,
    "z": 46,
    "shirt": 5155038,
    "skin": 15252627,
    "dialog": "Saya mahu bermain permainan komputer selama tiga jam, tetapi kerja sekolah saya masih belum siap.",
    "question": "Apakah yang patut dilakukan oleh Teck Seng?",
    "choices": [
      "Bermain selama tiga jam dahulu.",
      "Menyiapkan tanggungjawab terlebih dahulu dan bermain untuk tempoh yang munasabah selepas itu.",
      "Bermain sehingga lewat malam."
    ],
    "correctAnswer": 1,
    "feedback": "Penggunaan teknologi juga perlu sederhana. Kita perlu mengimbangkan hiburan, pembelajaran dan rehat.",
    "feelingQuestion": "Bagaimanakah perasaan kamu apabila dapat mengawal masa menggunakan peranti digital?",
    "summary": "Mengawal penggunaan teknologi"
  },
  {
    "id": "kumar",
    "npc": "Kumar",
    "place": "Dewan Komuniti",
    "icon": "🎉",
    "topic": "Masyarakat",
    "x": 0,
    "z": 4,
    "shirt": 16765286,
    "skin": 10250312,
    "dialog": "Penduduk Kampung Sederhana mahu menghias dewan untuk sambutan komuniti.",
    "question": "Apakah cara terbaik untuk menghias dewan?",
    "choices": [
      "Membeli sebanyak mungkin hiasan yang mahal.",
      "Menghias secara sederhana menggunakan barang yang diperlukan dan menggunakan semula bahan yang masih elok.",
      "Membeli hiasan baharu walaupun hiasan lama masih boleh digunakan."
    ],
    "correctAnswer": 1,
    "feedback": "Sambutan yang menarik tidak semestinya memerlukan perbelanjaan yang berlebihan.",
    "feelingQuestion": "Bagaimanakah perasaan kamu apabila dapat membantu masyarakat tanpa melakukan pembaziran?",
    "summary": "Mengelakkan pembaziran"
  }
].map(m=>({...m,name:m.npc,points:20}));
export const KEY='misi-kampung-sederhana-v2';
export const fresh=()=>({version:2,name:'',done:{},attempts:{},feelings:{},sound:false,position:{x:-24,z:6},finished:false});
export const completed=s=>missions.filter(m=>Object.hasOwn(s.done,m.id)).length;
export const score=s=>missions.reduce((v,m)=>v+(Object.hasOwn(s.done,m.id)?m.points:0),0);
export function readState(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s?.version!==2||typeof s.name!=='string')return null;const n=fresh();n.name=s.name.slice(0,40);n.sound=s.sound===true;for(const m of missions){n.attempts[m.id]=Math.max(0,Math.min(999,Number(s.attempts?.[m.id])||0));if(s.done?.[m.id]===m.points&&typeof s.feelings?.[m.id]==='string'&&s.feelings[m.id].trim()){n.done[m.id]=m.points;n.feelings[m.id]=s.feelings[m.id].slice(0,350);}}n.finished=s.finished===true&&completed(n)===5;if(Number.isFinite(s.position?.x)&&Number.isFinite(s.position?.z)&&Math.abs(s.position.x)<36&&s.position.z>-35&&s.position.z<55)n.position=s.position;return n;}catch{return null;}}
export function saveState(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true;}catch{return false;}}
export function completeMission(s,m,feeling){if(Object.hasOwn(s.done,m.id)||!feeling.trim())return false;s.done[m.id]=m.points;s.feelings[m.id]=feeling.trim().slice(0,350);return true;}
