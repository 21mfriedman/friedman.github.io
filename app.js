let foods = [];

/* ───────────────────────────────
   Fixed columns (always visible)
   ─────────────────────────────── */

const FIXED_COLUMNS = [
  { key: "name", label: "Food" },
  { key: "amount_g", label: "Amount (g)" }
];

/* ───────────────────────────────
   Column hierarchy definition
   ─────────────────────────────── */

const COLUMN_TREE = [
  {
    label: "Proximates",
    children: [
      { label: "Water (g)", nutrientPath: "Proximates", nutrientKey: "Water (g)" },
      { label: "Energy (kcal)", nutrientPath: "Proximates", nutrientKey: "Energy (kcal)" },
      { label: "Nitrogen (g)", nutrientPath: "Proximates", nutrientKey: "Nitrogen (g)" },
      { label: "Protein (g)", nutrientPath: "Proximates", nutrientKey: "Protein (g)" },
      { label: "Total fat (g)", nutrientPath: "Proximates", nutrientKey: "Total fat (g)" },
      { label: "Ash (g)", nutrientPath: "Proximates", nutrientKey: "Ash (g)" }
    ]
  },

  {
    label: "Lipids",
    children: [
      { label: "Saturated (g)", nutrientPath: "Lipids", nutrientKey: "Saturated (g)" },
      {
        label: "Unsaturated",
        children: [
          {
            label: "Monounsaturated (g)",
            nutrientPath: "Lipids > Unsaturated",
            nutrientKey: "Monounsaturated (g)"
          },
          {
            label: "Polyunsaturated (g)",
            nutrientPath: "Lipids > Unsaturated",
            nutrientKey: "Polyunsaturated (g)"
          }
        ]
      }
    ]
  },

  {
    label: "Carbohydrates",
    children: [
      {
        label: "Total carbs (g)",
        nutrientPath: "Carbohydrates",
        nutrientKey: "Total carbs (g)"
      },
      {
        label: "Fiber",
        children: [
          { label: "Total fiber (g)", nutrientPath: "Carbohydrates > Fiber", nutrientKey: "Total fiber (g)" },
          { label: "Soluble fiber (g)", nutrientPath: "Carbohydrates > Fiber", nutrientKey: "Soluble fiber (g)" },
          { label: "Insoluble fiber (g)", nutrientPath: "Carbohydrates > Fiber", nutrientKey: "Insoluble fiber (g)" }
        ]
      },
      {
        label: "Sugar",
        children: [
          { label: "Sugars, total (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Sugars, total (g)" },
          { label: "Sucrose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Sucrose (g)" },
          { label: "Glucose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Glucose (g)" },
          { label: "Fructose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Fructose (g)" },
          { label: "Lactose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Lactose (g)" },
          { label: "Maltose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Maltose (g)" },
          { label: "Galactose (g)", nutrientPath: "Carbohydrates > Sugar", nutrientKey: "Galactose (g)" }
        ]
      },
      { label: "Starch (g)", nutrientPath: "Carbohydrates", nutrientKey: "Starch (g)" }
    ]
  },

  {
    label: "Minerals",
    children: [
      { label: "Calcium (mg)", nutrientPath: "Minerals", nutrientKey: "Calcium (mg)" },
      { label: "Iron (mg)", nutrientPath: "Minerals", nutrientKey: "Iron (mg)" },
      { label: "Magnesium (mg)", nutrientPath: "Minerals", nutrientKey: "Magnesium (mg)" },
      { label: "Phosphorus (mg)", nutrientPath: "Minerals", nutrientKey: "Phosphorus (mg)" },
      { label: "Potassium (mg)", nutrientPath: "Minerals", nutrientKey: "Potassium (mg)" },
      { label: "Sodium (mg)", nutrientPath: "Minerals", nutrientKey: "Sodium (mg)" },
      { label: "Zinc (mg)", nutrientPath: "Minerals", nutrientKey: "Zinc (mg)" },
      { label: "Copper (mg)", nutrientPath: "Minerals", nutrientKey: "Copper (mg)" },
      { label: "Manganese (mg)", nutrientPath: "Minerals", nutrientKey: "Manganese (mg)" },
      { label: "Selenium (µg)", nutrientPath: "Minerals", nutrientKey: "Selenium (µg)" },
      { label: "Molybdenum (µg)", nutrientPath: "Minerals", nutrientKey: "Molybdenum (µg)" }
    ]
  },

  {
    label: "Vitamins",
    children: [
      {
        label: "Water-Soluble",
        children: [
          { label: "Vitamin C (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Vitamin C (mg)" },
          { label: "Thiamin (B1) (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Thiamin (B1) (mg)" },
          { label: "Riboflavin (B2) (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Riboflavin (B2) (mg)" },
          { label: "Niacin (B3) (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Niacin (B3) (mg)" },
          { label: "Pantothenic acid (B5) (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Pantothenic acid (B5) (mg)" },
          { label: "Vitamin B-6 (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Vitamin B-6 (mg)" },
          { label: "Biotin (B7) (mg)", nutrientPath: "Vitamins > Water-Soluble", nutrientKey: "Biotin (B7) (mg)" },
          {
            label: "Folate",
            children: [
              { label: "Total Folate (µg)", nutrientPath: "Vitamins > Water-Soluble > Folate", nutrientKey: "Total Folate (µg)" },
              { label: "5-MTHF (folate) (µg)", nutrientPath: "Vitamins > Water-Soluble > Folate", nutrientKey: "5-MTHF (µg)" }
            ]
          }
        ]
      },
      {
        label: "Fat-Soluble",
        children: [
          { label: "Vitamin A (µg)", nutrientPath: "Vitamins > Fat-Soluble", nutrientKey: "Vitamin A (µg)" },
          { label: "Vitamin D (µg)", nutrientPath: "Vitamins > Fat-Soluble", nutrientKey: "Vitamin D (µg)" },
          { label: "Vitamin E (mg)", nutrientPath: "Vitamins > Fat-Soluble", nutrientKey: "Vitamin E (mg)" },
          { label: "Vitamin K (µg)", nutrientPath: "Vitamins > Fat-Soluble", nutrientKey: "Vitamin K (µg)" },
          {
            label: "Carotenoids",
            children: [
              { label: "Lycopene (µg)", nutrientPath: "Vitamins > Fat-Soluble > Carotenoids", nutrientKey: "Lycopene (µg)" },
              {
                label: "Lutein + Zeaxanthin (µg)",
                nutrientPath: "Vitamins > Fat-Soluble > Carotenoids",
                nutrientKey: "Lutein + Zeaxanthin (µg)"
              }
            ]
          }
        ]
      }
    ]
  }
];


/* ───────────────────────────────
   Tree utilities
   ─────────────────────────────── */

function getMaxDepth(nodes, depth = 1) {
  return Math.max(
    ...nodes.map(n =>
      n.children ? getMaxDepth(n.children, depth + 1) : depth
    )
  );
}

function countLeaves(nodes) {
  return nodes.reduce(
    (sum, n) => sum + (n.children ? countLeaves(n.children) : 1),
    0
  );
}

function getLeafColumns(nodes) {
  const leaves = [];

  function walk(list) {
    list.forEach(node => {
      if (node.children) {
        walk(node.children);
      } else {
        leaves.push(node);
      }
    });
  }

  walk(nodes);
  return leaves;
}

const LEAF_COLUMNS = getLeafColumns(COLUMN_TREE);

function renderHeaders(table) {
  const thead = document.createElement("thead");
  const depth = getMaxDepth(COLUMN_TREE);
  const rows = Array.from({ length: depth }, () => []);
  const ROW_HEIGHT = 36; 

  // Fixed columns
  FIXED_COLUMNS.forEach((col, index) => {
    const th = document.createElement("th");
    th.textContent = col.label;
    th.rowSpan = depth;
    th.style.top = "0px"; 

    if (index === 0) th.classList.add("sticky-col");
    
    rows[0].push(th);
  });

  function walk(nodes, level) {
    nodes.forEach(node => {
      const th = document.createElement("th");
      th.textContent = node.label;
      th.classList.add("group");
      
      // Assign the top offset based on current hierarchy level
      th.style.top = (level * ROW_HEIGHT) + "px";

      if (node.children) {
        th.colSpan = countLeaves(node.children);
        rows[level].push(th);
        walk(node.children, level + 1);
      } else {
        th.rowSpan = depth - level;
        rows[level].push(th);
      }
    });
  }

  walk(COLUMN_TREE, 0);

  rows.forEach((cells) => {
    const tr = document.createElement("tr");
    tr.classList.add("header-row");
    cells.forEach(cell => tr.appendChild(cell));
    thead.appendChild(tr);
  });

  table.appendChild(thead);
}

function renderTable(data) {
  const container = document.getElementById("table-container");
  container.innerHTML = "";

  const table = document.createElement("table");
  table.className = "nutrition-table";

  renderHeaders(table);

  const tbody = document.createElement("tbody");

  data.forEach(food => {
    const tr = document.createElement("tr");

    FIXED_COLUMNS.forEach((col, index) => {
      const td = document.createElement("td");
      td.textContent = food[col.key] ?? "";

      if (index === 0) td.classList.add("sticky-col");

      tr.appendChild(td);
    });


    LEAF_COLUMNS.forEach(col => {
      const td = document.createElement("td");
      td.textContent = food.nutrients[col.nutrientPath]?.[col.nutrientKey] ?? "";
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

/* ───────────────────────────────
   Data loading & search
   ─────────────────────────────── */

fetch("Assets/Nutrition Project/food_data.json")
  .then(r => r.json())
  .then(data => {
    foods = data.foods;
    renderTable(foods);
  });

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  renderTable(
    foods.filter(f => f.name.toLowerCase().includes(q))
  );
});
