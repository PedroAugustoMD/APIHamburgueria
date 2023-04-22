-- CreateTable
CREATE TABLE "pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteEmail" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" REAL NOT NULL,
    CONSTRAINT "pedido_clienteEmail_fkey" FOREIGN KEY ("clienteEmail") REFERENCES "cliente" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
