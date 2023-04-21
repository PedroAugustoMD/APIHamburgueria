-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "prato" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "valor" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_id_key" ON "cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_email_key" ON "cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "prato_id_key" ON "prato"("id");

-- CreateIndex
CREATE UNIQUE INDEX "prato_nome_key" ON "prato"("nome");
