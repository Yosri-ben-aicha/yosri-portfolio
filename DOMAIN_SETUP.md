# 🌐 Guide Rapide - Configuration Domaine Personnalisé

## 🎯 Objectif
Obtenir un domaine professionnel comme `yosri-ben-aicha.engineer` pour votre portfolio.

## ⚡ Méthode Rapide (5 minutes)

### Option 1: Domaine Gratuit (Pour tester)

1. **Allez sur Freenom** (https://www.freenom.com)
2. Recherchez: `yosri-ben-aicha.tk` ou `yosri.tk`
3. Créez un compte et enregistrez GRATUITEMENT
4. ⚠️ Note: Moins professionnel, mais gratuit pour tester

### Option 2: Domaine Payant Professionnel (Recommandé)

#### Étape 1: Acheter le Domaine (2 minutes)

**Namecheap** (Recommandé):
1. Allez sur https://www.namecheap.com
2. Recherchez: `yosri-ben-aicha.engineer`
3. Ajoutez au panier et payez (~$15/an)
4. Complétez l'achat

**Alternatives:**
- Porkbun: https://porkbun.com
- Google Domains: https://domains.google

#### Étape 2: Configurer dans Vercel (2 minutes)

1. **Ouvrez Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Cliquez sur votre projet "yosri-portfolio"

2. **Ajoutez le domaine:**
   - Settings → Domains → Add Domain
   - Entrez: `yosri-ben-aicha.engineer`
   - Cliquez "Add"

3. **Vercel affichera les instructions DNS:**
   - Copiez les valeurs affichées
   - Vous verrez quelque chose comme:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

#### Étape 3: Configurer les DNS (1 minute)

**Si vous utilisez Namecheap:**

1. Allez sur https://www.namecheap.com
2. Connectez-vous
3. Domain List → Manage (à côté de votre domaine)
4. Onglet "Advanced DNS"
5. Cliquez "Add New Record"
6. Ajoutez les enregistrements de Vercel:
   - Pour `@`: Type `A Record`, Host `@`, Value = IP de Vercel
   - Pour `www`: Type `CNAME Record`, Host `www`, Value = `cname.vercel-dns.com`

**Si vous utilisez un autre registrar:**
- Suivez les mêmes principes
- Ajoutez les enregistrements A et CNAME fournis par Vercel

#### Étape 4: Attendre (5-30 minutes)

- Vercel vérifiera automatiquement
- Status passera de "Pending" à "Valid Configuration"
- Votre site sera accessible sur votre domaine!

## ✅ Vérification

1. Attendez 5-30 minutes
2. Vérifiez dans Vercel: Status doit être "Valid Configuration"
3. Visitez: `https://yosri-ben-aicha.engineer`
4. ✅ Votre portfolio est en ligne!

## 🆘 Problèmes Courants

**DNS ne se propage pas:**
- Attendez jusqu'à 48h (généralement 15-30 min)
- Vérifiez avec: https://dnschecker.org

**Vercel dit "Invalid Configuration":**
- Vérifiez que les DNS records sont corrects
- Assurez-vous que les TTL sont bas (300 ou moins)

**Le site ne charge pas:**
- Vérifiez que le déploiement Vercel est réussi
- Vérifiez les logs dans Vercel Dashboard

## 📞 Support

- Documentation Vercel: https://vercel.com/docs/concepts/projects/domains
- Support Vercel: https://vercel.com/support

