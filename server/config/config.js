// ============================
//              Puerto
//=============================

process.env.PORT = process.env.PORT || 3000;

// ============================
//              Entorno
//=============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//              Vencimiento del token
//=============================
//60 segundos
//60 minutos
//24 horas
//30 dias
//process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '30d';


// ============================
//              SEED de autenticación
//=============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//              Base de Datos
//=============================

let urlDB;

//if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe';
// } else {
urlDB = 'mongodb+srv://dbludwig:guasey@cluster0.cgqsq.mongodb.net/cafe';
//     urlDB = process.env.MONGO_URI;
//     urlDB = process.env.NODE_URI;
//     console.log(process.env.NODE_URI);
// }

process.env.URLDB = urlDB;

// ============================
//              Google Client ID
//=============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '153676889051-6od2508sum89ifgto7d6cmvp70l356vi.apps.googleusercontent.com';