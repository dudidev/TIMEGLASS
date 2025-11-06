# TimeGlass

TimeGlass es un cronómetro desarrollado en Angular.  
Implementa un Observable frío para el control del flujo del tiempo utilizando setInterval.  
Incluye funciones para iniciar, pausar y reiniciar el cronómetro.  
La interfaz está diseñada con estilo glassmorphism (efecto acrílico).

---

## Características

- Interfaz minimalista.
- Manejo del tiempo con Observable frío.
- Controles Start, Pause y Reset.
- Uso de setInterval y unsubscribe para evitar fugas de memoria.
- Contador en formato horas:minutos:segundos.

---

## Estructura del componente

/src/app/cronometro/
- cronometro.component.ts
- cronometro.component.html
- cronometro.component.css

---

## Requisitos

- Node.js 14 o superior.
- Angular CLI instalado globalmente.

Instalación del CLI:
```bash
npm install -g @angular/cli
```

---

## Como ejecutar el proyecto

Clonar el repositorio:
```bash
git clone https://github.com/dudidev/TIMEGLASS.git
```

Entrar en el proyecto:
```bash
cd TimeGlass
```

Instalar dependencias: 
```bash
npm install
```

Ejecutar servidor en desarrollo:
```bash
ng serve
```

Abrir en el navegador: `http://localhost:4200/`

--- 

## Compilacion para produccion

```bash
ng build --prod
```

---

## Conceptos claves utilizados
| Concepto        | Descripción                                              |
| --------------- | -------------------------------------------------------- |
| Observable frío | Solo produce valores cuando existe una suscripción.      |
| setInterval     | Genera la emisión de valores de tiempo.                  |
| unsubscribe()   | Libera recursos cuando el cronómetro se pausa o detiene. |
| Glassmorphism   | Estilo visual basado en transparencia y desenfoque.      |

---

## Autor
`Duvier David`

## Redes
`Instagram`: `https://www.instagram.com/dddavid____/`
