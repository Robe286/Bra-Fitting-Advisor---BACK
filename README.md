# Bra-Fitting-Advisor - App de Asesoramiento en corsetería en Node.js + React

Este proyecto es una **aplicación de asesoramiento especializado en corsetería**. Cada usuario puede registrarse, iniciar sesión, ver contenido didáctico, calcular su talla de sujetador en base a las tablas de equivalencia, rellenar un formulario de asesoramiento y filtrar productos en base a sus preferencias y a disponibilidad de stock.

Los asesoramientos son personalizados y no son visibles para otros usuarios, la aplicación asegura la privacidad usando autenticación basada en tokens (JWT).

---

## Tecnologías usadas

## Backend
- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt.js
- JSON Web Token (JWT)
- dotenv
- CORS

### Frontend
[Linkanetlify]

---

## Funcionalidades

- Registro de usuario con email y contraseña
- Login seguro con generación de token JWT
- CRUD de productos para gestión de Stock (crear, leer, editar, eliminar)
- Filtrado de productos por:
  - Talla
  - Copa
  - Categoría
  - Tipo de relleno
  - Precio (Presupuesto min y max)
  - Marca
  - Color
- Cálculo de la talla por:
 - contorno de tórax (bajo pecho)
 - contorno de busto (pecho)

## Organización del código

<pre>
├── config/           ← Conexión a MongoDB
├── controllers/      ← Lógica de autenticación, productos y tallas
├── data/             ← Tabla de correspondecia busto - torax
├── helpers/          ← Lógica de construcción de filtrado, cálculo de talla y filtros 
├── middleware/       ← Middleware de protección con JWT
├── models/           ← Esquemas de productos y usuario
├── routes/           ← Rutas de autenticación, producto y talla
├── .env              ← Variables de entorno
└── index.js          ← Inicio de la app
</pre>

El archivo `.env` tendrá las siguientes variables de entorno:

- PORT=3001 `Puerto`
- MONGODB_URI=mongodb+srv://<usuario>:<clave>@cluster.mongodb.net/nombreDB `url de mongo`  
- JWT_SECRET=supersecret `clave secreta que se usa para firmar y verificar los tokens JWT`

## Rutas disponibles

### Authenticación (/api/auth)
- POST /register: Registro de nuevo usuario { email, password }
- POST /login: Login del usuario { email, password } → Devuelve un token JWT

### Productos (/api/products)
- GET /: Obtener todos los productos del stock
- GET /:id Obtener un producto del stock
- POST /: Crear nuevo producto { description, image, size, cup, color, category, stuffed, brand, price }
- POST /filter Filtrar productos del stock { ...req.body }
- PUT /:id: Actualizar un producto existente
- DELETE /:id: Eliminar un producto

### Tallas (/api/sizes)
- POST /calculate-bra Obtener la talla de sujetador

---

## Información sobre authenticación con JWT y Bcrypt

**¿Por qué es importante?**
- Garantiza que el token no ha sido alterado.
- Solo el servidor que tenga esa clave puede validar los tokens.
- Si alguien obtiene esa clave, puede falsificar tokens. Por eso debe ser secreta.

JWT_SECRET debe ser una cadena larga y compleja. Como mínimo 32 caracteres, incluyendo mayúsculas, números y símbolos.

```js
JWT_SECRET=A7F!kd92@9s#%Psdn3Zx$LmV!qWr1RtY
```

Como mínimo 32 caracteres, incluyendo mayúsculas, números y símbolos
## Seguridad: Autenticación y Encriptación

### ¿Qué es JWT?

**JWT (JSON Web Token)** es un método estándar para enviar información segura entre un cliente y un servidor como un **token firmado**. Sirve para identificar de forma segura al usuario una vez ha iniciado sesión.

- Cuando el usuario inicia sesión correctamente, el backend genera un **token firmado con una clave secreta** (`JWT_SECRET`) que se le devuelve al frontend.
- Este token se guarda en el frontend (por ejemplo, en localStorage).
- En cada petición protegida, se envía el token en la cabecera `Authorization`.
- El backend verifica el token antes de permitir el acceso a los datos del usuario.

#### Métodos usados:
```js
// Crear el token
jwt.sign({ id: user._id }, process.env.JWT_SECRET);

// Verificar token
jwt.verify(token, process.env.JWT_SECRET);
```
### ¿Qué es Bcrypt?

Bcrypt es una librería de hash de contraseñas. Nunca se guardan las contraseñas en texto plano. En su lugar, se convierte a un hash que no puede revertirse (no se puede obtener la contraseña original desde el hash).

**¿Por qué usar Bcrypt?**
Si alguien accede a la base de datos, no puede leer las contraseñas reales.
Aunque dos personas tengan la misma contraseña, tendrán hashes distintos gracias al salt aleatorio.

#### Métodos usados:

```js
// Para generar un hash
const hashed = await bcrypt.hash(password, 10);

// Para comparar con el hash
const isValid = await bcrypt.compare(inputPassword, user.password);
```

**¿Qué es un hash?**
Un hash es el resultado de aplicar una función matemática que convierte un dato (por ejemplo, una contraseña) en una cadena de caracteres fija e irrevertible.
Es como una `huella digital` del dato original.

**Características del hash:**
- Siempre produce la misma salida para la misma entrada.
- No se puede revertir: no puedes recuperar la contraseña original desde el hash.
- Se usa para comparar contraseñas sin almacenarlas directamente.

```js
const hash = bcrypt.hashSync("miPassword123", 10);
// hash → $2a$10$k3df9adfL... (resultado irreconocible)
```

**¿Qué es un salt?**
Un salt es un valor aleatorio que se añade a la contraseña antes de hashearla.

**¿Por qué es importante?**
- Asegura que dos contraseñas iguales no generen el mismo hash.
- Protege contra ataques de diccionario y tablas rainbow (precomputadas).
- Cuando usas bcrypt.hash("password", 10), el número 10 indica el número de rondas de salting (más rondas = más seguro pero más lento).