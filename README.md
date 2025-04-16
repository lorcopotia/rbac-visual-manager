# rbac-visual-manager


Estructura de directorios del proyecto:

```bash
rbac-visual-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Canvas/
│   │   ├── Sidebar/
│   │   ├── DetailsPanel/
│   │   ├── YAMLPanel/
│   ├── hooks/
│   ├── state/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── package.json

```

🚀 Primeros Pasos
1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/rbac-visual-manager.git
cd rbac-visual-manager
```

2. Instalar Dependencias

```bash
npm install
```

3. Iniciar la Aplicación

```bash
npm run dev
```

🖼️ Funcionalidades Principales
1. Lienzo Visual (Canvas)
- Arrastra y suelta nodos desde la barra lateral.
- Conecta nodos para crear RoleBindings o ClusterRoleBindings.
- Visualiza los Namespaces como contenedores agrupando los recursos correspondientes.​

2. Panel de Detalles
- Al seleccionar un nodo, edita sus propiedades: nombre, tipo, namespace.
- Para Roles y ClusterRoles, añade o modifica reglas de permisos seleccionando:
   - apiGroups
   - resources
   - verbs

3. Panel de YAML
- Visualiza en tiempo real el YAML generado para cada recurso.
- Edita campos simples como nombres o etiquetas.
- Botón para "Reconstruir Visualización desde YAML" en caso de ediciones manuales complejas.

🔄 Sincronización Visual ↔ YAML
- Visual ➜ YAML: Cada cambio en el lienzo actualiza automáticamente el YAML correspondiente.
- YAML ➜ Visual: Ediciones manuales en el YAML reflejan cambios en la visualización al presionar "Reconstruir Visualización".

📦 Importación y Exportación
- Importar YAML: Carga múltiples archivos YAML para visualizar la configuración existente.
- Exportar YAML: Descarga todos los recursos generados en un archivo ZIP o un único archivo concatenado.

🧪 Próximos Pasos
- Implementar validaciones para asegurar la coherencia entre los recursos.
- Añadir funcionalidades avanzadas como la agregación de roles.
- Integrar con herramientas existentes como rbac-manager para aplicar configuraciones directamente en el clúster.