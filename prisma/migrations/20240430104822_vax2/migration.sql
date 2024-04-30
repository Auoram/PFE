-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parent" (
    "idP" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "nomP" TEXT,
    "prenomP" TEXT,
    "numTelP" TEXT,
    "roleP" TEXT,
    "sexeP" TEXT NOT NULL,
    CONSTRAINT "Parent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CentreVax" (
    "idC" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomC" TEXT,
    "adresseC" TEXT,
    "numTel" INTEGER
);

-- CreateTable
CREATE TABLE "PersonnelMedical" (
    "idPM" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "emailPM" TEXT,
    "nomPM" TEXT,
    "prenomPM" TEXT,
    "numTelPM" INTEGER,
    "rolePM" TEXT,
    "CentreVax_idC" INTEGER NOT NULL,
    CONSTRAINT "PersonnelMedical_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonnelMedical_CentreVax_idC_fkey" FOREIGN KEY ("CentreVax_idC") REFERENCES "CentreVax" ("idC") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Enfant" (
    "idE" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomCompletE" TEXT NOT NULL,
    "dateNaiss" DATETIME,
    "adresseE" TEXT,
    "numSMI" TEXT NOT NULL,
    "centreSante_idC" INTEGER NOT NULL,
    "sexe" TEXT NOT NULL,
    "allergies" TEXT,
    "groupeSang" TEXT,
    "infoMedicaux" TEXT,
    "province" TEXT,
    "ville" TEXT,
    "Parent_idP" INTEGER NOT NULL,
    CONSTRAINT "Enfant_centreSante_idC_fkey" FOREIGN KEY ("centreSante_idC") REFERENCES "CentreVax" ("idC") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Enfant_Parent_idP_fkey" FOREIGN KEY ("Parent_idP") REFERENCES "Parent" ("idP") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vaccin" (
    "idV" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomV" TEXT NOT NULL,
    "descr" TEXT,
    "EffetSecondaire" TEXT,
    "ageRecommande" INTEGER,
    "doseV" TEXT,
    "abreviationV" TEXT,
    "maladieEvitable" TEXT,
    "Enfant_idE" INTEGER NOT NULL,
    CONSTRAINT "Vaccin_Enfant_idE_fkey" FOREIGN KEY ("Enfant_idE") REFERENCES "Enfant" ("idE") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RendezVous" (
    "idR" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateR" DATETIME,
    "statusR" TEXT NOT NULL,
    "CentreVax_idC" INTEGER NOT NULL,
    "Parent_idP" INTEGER NOT NULL,
    "Vaccin_idV" INTEGER NOT NULL,
    CONSTRAINT "RendezVous_CentreVax_idC_fkey" FOREIGN KEY ("CentreVax_idC") REFERENCES "CentreVax" ("idC") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RendezVous_Parent_idP_fkey" FOREIGN KEY ("Parent_idP") REFERENCES "Parent" ("idP") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RendezVous_Vaccin_idV_fkey" FOREIGN KEY ("Vaccin_idV") REFERENCES "Vaccin" ("idV") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Enfant_numSMI_key" ON "Enfant"("numSMI");

-- CreateIndex
CREATE UNIQUE INDEX "Vaccin_nomV_key" ON "Vaccin"("nomV");
