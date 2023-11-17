# `opentelekomcloud_cbr_vault_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_cbr_vault_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3).

# `cbrVaultV3` Submodule <a name="`cbrVaultV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrVaultV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrVaultV3 <a name="CbrVaultV3" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3(scope: Construct, id: string, config: CbrVaultV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules">putBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind">resetAutoBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand">resetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId">resetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules">resetBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBilling` <a name="putBilling" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling"></a>

```typescript
public putBilling(value: CbrVaultV3Billing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `putBindRules` <a name="putBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules"></a>

```typescript
public putBindRules(value: IResolvable | CbrVaultV3BindRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]

---

##### `putResource` <a name="putResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource"></a>

```typescript
public putResource(value: IResolvable | CbrVaultV3Resource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]

---

##### `resetAutoBind` <a name="resetAutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind"></a>

```typescript
public resetAutoBind(): void
```

##### `resetAutoExpand` <a name="resetAutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand"></a>

```typescript
public resetAutoExpand(): void
```

##### `resetBackupPolicyId` <a name="resetBackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId"></a>

```typescript
public resetBackupPolicyId(): void
```

##### `resetBindRules` <a name="resetBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules"></a>

```typescript
public resetBindRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId"></a>

```typescript
public resetEnterpriseProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

cbrVaultV3.CbrVaultV3.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

cbrVaultV3.CbrVaultV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

cbrVaultV3.CbrVaultV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

cbrVaultV3.CbrVaultV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CbrVaultV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CbrVaultV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CbrVaultV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules">bindRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput">autoBindInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput">autoExpandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput">billingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput">bindRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput">resourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind">autoBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand">autoExpand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing"></a>

```typescript
public readonly billing: CbrVaultV3BillingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a>

---

##### `bindRules`<sup>Required</sup> <a name="bindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules"></a>

```typescript
public readonly bindRules: CbrVaultV3BindRulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource"></a>

```typescript
public readonly resource: CbrVaultV3ResourceList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `autoBindInput`<sup>Optional</sup> <a name="autoBindInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput"></a>

```typescript
public readonly autoBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoExpandInput`<sup>Optional</sup> <a name="autoExpandInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput"></a>

```typescript
public readonly autoExpandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput"></a>

```typescript
public readonly backupPolicyIdInput: string;
```

- *Type:* string

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput"></a>

```typescript
public readonly billingInput: CbrVaultV3Billing;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `bindRulesInput`<sup>Optional</sup> <a name="bindRulesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput"></a>

```typescript
public readonly bindRulesInput: IResolvable | CbrVaultV3BindRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput"></a>

```typescript
public readonly enterpriseProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | CbrVaultV3Resource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoBind`<sup>Required</sup> <a name="autoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind"></a>

```typescript
public readonly autoBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoExpand`<sup>Required</sup> <a name="autoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand"></a>

```typescript
public readonly autoExpand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CbrVaultV3Billing <a name="CbrVaultV3Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

const cbrVaultV3Billing: cbrVaultV3.CbrVaultV3Billing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType">protectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode">chargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType">cloudType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel">consistentLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl">consoleUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo">extraInfo</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay">isAutoPay</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew">isAutoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum">periodNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType">periodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}. |

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

##### `protectType`<sup>Required</sup> <a name="protectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType"></a>

```typescript
public readonly protectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `chargingMode`<sup>Optional</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

##### `cloudType`<sup>Optional</sup> <a name="cloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType"></a>

```typescript
public readonly cloudType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

##### `consistentLevel`<sup>Optional</sup> <a name="consistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel"></a>

```typescript
public readonly consistentLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

##### `consoleUrl`<sup>Optional</sup> <a name="consoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl"></a>

```typescript
public readonly consoleUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

##### `extraInfo`<sup>Optional</sup> <a name="extraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo"></a>

```typescript
public readonly extraInfo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

##### `isAutoPay`<sup>Optional</sup> <a name="isAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay"></a>

```typescript
public readonly isAutoPay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

##### `isAutoRenew`<sup>Optional</sup> <a name="isAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew"></a>

```typescript
public readonly isAutoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

##### `periodNum`<sup>Optional</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum"></a>

```typescript
public readonly periodNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

##### `periodType`<sup>Optional</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

### CbrVaultV3BindRules <a name="CbrVaultV3BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

const cbrVaultV3BindRules: cbrVaultV3.CbrVaultV3BindRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#key CbrVaultV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#value CbrVaultV3#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#key CbrVaultV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#value CbrVaultV3#value}.

---

### CbrVaultV3Config <a name="CbrVaultV3Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

const cbrVaultV3Config: cbrVaultV3.CbrVaultV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind">autoBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand">autoExpand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules">bindRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]</code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource">resource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing"></a>

```typescript
public readonly billing: CbrVaultV3Billing;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `autoBind`<sup>Optional</sup> <a name="autoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind"></a>

```typescript
public readonly autoBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `autoExpand`<sup>Optional</sup> <a name="autoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand"></a>

```typescript
public readonly autoExpand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `backupPolicyId`<sup>Optional</sup> <a name="backupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `bindRules`<sup>Optional</sup> <a name="bindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules"></a>

```typescript
public readonly bindRules: IResolvable | CbrVaultV3BindRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource"></a>

```typescript
public readonly resource: IResolvable | CbrVaultV3Resource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

### CbrVaultV3Resource <a name="CbrVaultV3Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

const cbrVaultV3Resource: cbrVaultV3.CbrVaultV3Resource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount">backupCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize">backupSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes">excludeVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes">includeVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus">protectStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#type CbrVaultV3#type}. |

---

##### `backupCount`<sup>Optional</sup> <a name="backupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount"></a>

```typescript
public readonly backupCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}.

---

##### `backupSize`<sup>Optional</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize"></a>

```typescript
public readonly backupSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}.

---

##### `excludeVolumes`<sup>Optional</sup> <a name="excludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes"></a>

```typescript
public readonly excludeVolumes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeVolumes`<sup>Optional</sup> <a name="includeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes"></a>

```typescript
public readonly includeVolumes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cbr_vault_v3#type CbrVaultV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrVaultV3BillingOutputReference <a name="CbrVaultV3BillingOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3BillingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode">resetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType">resetCloudType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel">resetConsistentLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl">resetConsoleUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo">resetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay">resetIsAutoPay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew">resetIsAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum">resetPeriodNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType">resetPeriodType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChargingMode` <a name="resetChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode"></a>

```typescript
public resetChargingMode(): void
```

##### `resetCloudType` <a name="resetCloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType"></a>

```typescript
public resetCloudType(): void
```

##### `resetConsistentLevel` <a name="resetConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel"></a>

```typescript
public resetConsistentLevel(): void
```

##### `resetConsoleUrl` <a name="resetConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl"></a>

```typescript
public resetConsoleUrl(): void
```

##### `resetExtraInfo` <a name="resetExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo"></a>

```typescript
public resetExtraInfo(): void
```

##### `resetIsAutoPay` <a name="resetIsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay"></a>

```typescript
public resetIsAutoPay(): void
```

##### `resetIsAutoRenew` <a name="resetIsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew"></a>

```typescript
public resetIsAutoRenew(): void
```

##### `resetPeriodNum` <a name="resetPeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum"></a>

```typescript
public resetPeriodNum(): void
```

##### `resetPeriodType` <a name="resetPeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType"></a>

```typescript
public resetPeriodType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated">allocated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene">frozenScene</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode">specCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit">storageUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used">used</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput">chargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput">cloudTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput">consistentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput">consoleUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput">extraInfoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput">isAutoPayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput">isAutoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput">periodNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput">periodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput">protectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode">chargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType">cloudType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel">consistentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo">extraInfo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay">isAutoPay</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew">isAutoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum">periodNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType">protectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocated`<sup>Required</sup> <a name="allocated" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated"></a>

```typescript
public readonly allocated: number;
```

- *Type:* number

---

##### `frozenScene`<sup>Required</sup> <a name="frozenScene" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene"></a>

```typescript
public readonly frozenScene: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `specCode`<sup>Required</sup> <a name="specCode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode"></a>

```typescript
public readonly specCode: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageUnit`<sup>Required</sup> <a name="storageUnit" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit"></a>

```typescript
public readonly storageUnit: string;
```

- *Type:* string

---

##### `used`<sup>Required</sup> <a name="used" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used"></a>

```typescript
public readonly used: number;
```

- *Type:* number

---

##### `chargingModeInput`<sup>Optional</sup> <a name="chargingModeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput"></a>

```typescript
public readonly chargingModeInput: string;
```

- *Type:* string

---

##### `cloudTypeInput`<sup>Optional</sup> <a name="cloudTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput"></a>

```typescript
public readonly cloudTypeInput: string;
```

- *Type:* string

---

##### `consistentLevelInput`<sup>Optional</sup> <a name="consistentLevelInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput"></a>

```typescript
public readonly consistentLevelInput: string;
```

- *Type:* string

---

##### `consoleUrlInput`<sup>Optional</sup> <a name="consoleUrlInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput"></a>

```typescript
public readonly consoleUrlInput: string;
```

- *Type:* string

---

##### `extraInfoInput`<sup>Optional</sup> <a name="extraInfoInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput"></a>

```typescript
public readonly extraInfoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isAutoPayInput`<sup>Optional</sup> <a name="isAutoPayInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput"></a>

```typescript
public readonly isAutoPayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoRenewInput`<sup>Optional</sup> <a name="isAutoRenewInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput"></a>

```typescript
public readonly isAutoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `periodNumInput`<sup>Optional</sup> <a name="periodNumInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput"></a>

```typescript
public readonly periodNumInput: number;
```

- *Type:* number

---

##### `periodTypeInput`<sup>Optional</sup> <a name="periodTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput"></a>

```typescript
public readonly periodTypeInput: string;
```

- *Type:* string

---

##### `protectTypeInput`<sup>Optional</sup> <a name="protectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput"></a>

```typescript
public readonly protectTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

---

##### `cloudType`<sup>Required</sup> <a name="cloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType"></a>

```typescript
public readonly cloudType: string;
```

- *Type:* string

---

##### `consistentLevel`<sup>Required</sup> <a name="consistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel"></a>

```typescript
public readonly consistentLevel: string;
```

- *Type:* string

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl"></a>

```typescript
public readonly consoleUrl: string;
```

- *Type:* string

---

##### `extraInfo`<sup>Required</sup> <a name="extraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo"></a>

```typescript
public readonly extraInfo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isAutoPay`<sup>Required</sup> <a name="isAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay"></a>

```typescript
public readonly isAutoPay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoRenew`<sup>Required</sup> <a name="isAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew"></a>

```typescript
public readonly isAutoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `periodNum`<sup>Required</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum"></a>

```typescript
public readonly periodNum: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `protectType`<sup>Required</sup> <a name="protectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType"></a>

```typescript
public readonly protectType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CbrVaultV3Billing;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---


### CbrVaultV3BindRulesList <a name="CbrVaultV3BindRulesList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3BindRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get"></a>

```typescript
public get(index: number): CbrVaultV3BindRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CbrVaultV3BindRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>[]

---


### CbrVaultV3BindRulesOutputReference <a name="CbrVaultV3BindRulesOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3BindRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CbrVaultV3BindRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>

---


### CbrVaultV3ResourceList <a name="CbrVaultV3ResourceList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3ResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get"></a>

```typescript
public get(index: number): CbrVaultV3ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CbrVaultV3Resource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>[]

---


### CbrVaultV3ResourceOutputReference <a name="CbrVaultV3ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer"></a>

```typescript
import { cbrVaultV3 } from '@cdktf/provider-opentelekomcloud'

new cbrVaultV3.CbrVaultV3ResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount">resetBackupCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize">resetBackupSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes">resetExcludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes">resetIncludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupCount` <a name="resetBackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount"></a>

```typescript
public resetBackupCount(): void
```

##### `resetBackupSize` <a name="resetBackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize"></a>

```typescript
public resetBackupSize(): void
```

##### `resetExcludeVolumes` <a name="resetExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes"></a>

```typescript
public resetExcludeVolumes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeVolumes` <a name="resetIncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes"></a>

```typescript
public resetIncludeVolumes(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus"></a>

```typescript
public resetProtectStatus(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput">backupCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput">backupSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput">excludeVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput">includeVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount">backupCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize">backupSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes">excludeVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes">includeVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupCountInput`<sup>Optional</sup> <a name="backupCountInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput"></a>

```typescript
public readonly backupCountInput: number;
```

- *Type:* number

---

##### `backupSizeInput`<sup>Optional</sup> <a name="backupSizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput"></a>

```typescript
public readonly backupSizeInput: number;
```

- *Type:* number

---

##### `excludeVolumesInput`<sup>Optional</sup> <a name="excludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput"></a>

```typescript
public readonly excludeVolumesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeVolumesInput`<sup>Optional</sup> <a name="includeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput"></a>

```typescript
public readonly includeVolumesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput"></a>

```typescript
public readonly protectStatusInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount"></a>

```typescript
public readonly backupCount: number;
```

- *Type:* number

---

##### `backupSize`<sup>Required</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize"></a>

```typescript
public readonly backupSize: number;
```

- *Type:* number

---

##### `excludeVolumes`<sup>Required</sup> <a name="excludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes"></a>

```typescript
public readonly excludeVolumes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeVolumes`<sup>Required</sup> <a name="includeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes"></a>

```typescript
public readonly includeVolumes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CbrVaultV3Resource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>

---



