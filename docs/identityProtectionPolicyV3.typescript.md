# `identityProtectionPolicyV3` Submodule <a name="`identityProtectionPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProtectionPolicyV3 <a name="IdentityProtectionPolicyV3" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3 opentelekomcloud_identity_protection_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

new identityProtectionPolicyV3.IdentityProtectionPolicyV3(scope: Construct, id: string, config?: IdentityProtectionPolicyV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config">IdentityProtectionPolicyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config">IdentityProtectionPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement">putSelfManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetEnableOperationProtectionPolicy">resetEnableOperationProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetSelfManagement">resetSelfManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationEmail">resetVerificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationMobile">resetVerificationMobile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelfManagement` <a name="putSelfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement"></a>

```typescript
public putSelfManagement(value: IdentityProtectionPolicyV3SelfManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

---

##### `resetEnableOperationProtectionPolicy` <a name="resetEnableOperationProtectionPolicy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetEnableOperationProtectionPolicy"></a>

```typescript
public resetEnableOperationProtectionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSelfManagement` <a name="resetSelfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetSelfManagement"></a>

```typescript
public resetSelfManagement(): void
```

##### `resetVerificationEmail` <a name="resetVerificationEmail" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationEmail"></a>

```typescript
public resetVerificationEmail(): void
```

##### `resetVerificationMobile` <a name="resetVerificationMobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationMobile"></a>

```typescript
public resetVerificationMobile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityProtectionPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityProtectionPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityProtectionPolicyV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityProtectionPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityProtectionPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagement">selfManagement</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference">IdentityProtectionPolicyV3SelfManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfVerification">selfVerification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicyInput">enableOperationProtectionPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagementInput">selfManagementInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmailInput">verificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobileInput">verificationMobileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicy">enableOperationProtectionPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmail">verificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobile">verificationMobile</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `selfManagement`<sup>Required</sup> <a name="selfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagement"></a>

```typescript
public readonly selfManagement: IdentityProtectionPolicyV3SelfManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference">IdentityProtectionPolicyV3SelfManagementOutputReference</a>

---

##### `selfVerification`<sup>Required</sup> <a name="selfVerification" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfVerification"></a>

```typescript
public readonly selfVerification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableOperationProtectionPolicyInput`<sup>Optional</sup> <a name="enableOperationProtectionPolicyInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicyInput"></a>

```typescript
public readonly enableOperationProtectionPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `selfManagementInput`<sup>Optional</sup> <a name="selfManagementInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagementInput"></a>

```typescript
public readonly selfManagementInput: IdentityProtectionPolicyV3SelfManagement;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

---

##### `verificationEmailInput`<sup>Optional</sup> <a name="verificationEmailInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmailInput"></a>

```typescript
public readonly verificationEmailInput: string;
```

- *Type:* string

---

##### `verificationMobileInput`<sup>Optional</sup> <a name="verificationMobileInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobileInput"></a>

```typescript
public readonly verificationMobileInput: string;
```

- *Type:* string

---

##### `enableOperationProtectionPolicy`<sup>Required</sup> <a name="enableOperationProtectionPolicy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicy"></a>

```typescript
public readonly enableOperationProtectionPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `verificationEmail`<sup>Required</sup> <a name="verificationEmail" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmail"></a>

```typescript
public readonly verificationEmail: string;
```

- *Type:* string

---

##### `verificationMobile`<sup>Required</sup> <a name="verificationMobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobile"></a>

```typescript
public readonly verificationMobile: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProtectionPolicyV3Config <a name="IdentityProtectionPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.Initializer"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

const identityProtectionPolicyV3Config: identityProtectionPolicyV3.IdentityProtectionPolicyV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.enableOperationProtectionPolicy">enableOperationProtectionPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.selfManagement">selfManagement</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | self_management block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationEmail">verificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationMobile">verificationMobile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableOperationProtectionPolicy`<sup>Optional</sup> <a name="enableOperationProtectionPolicy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.enableOperationProtectionPolicy"></a>

```typescript
public readonly enableOperationProtectionPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `selfManagement`<sup>Optional</sup> <a name="selfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.selfManagement"></a>

```typescript
public readonly selfManagement: IdentityProtectionPolicyV3SelfManagement;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

self_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#self_management IdentityProtectionPolicyV3#self_management}

---

##### `verificationEmail`<sup>Optional</sup> <a name="verificationEmail" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationEmail"></a>

```typescript
public readonly verificationEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}.

---

##### `verificationMobile`<sup>Optional</sup> <a name="verificationMobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationMobile"></a>

```typescript
public readonly verificationMobile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}.

---

### IdentityProtectionPolicyV3SelfManagement <a name="IdentityProtectionPolicyV3SelfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.Initializer"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

const identityProtectionPolicyV3SelfManagement: identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.accessKey">accessKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.email">email</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.mobile">mobile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.password">password</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.accessKey"></a>

```typescript
public readonly accessKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.email"></a>

```typescript
public readonly email: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}.

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.mobile"></a>

```typescript
public readonly mobile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.password"></a>

```typescript
public readonly password: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityProtectionPolicyV3SelfManagementOutputReference <a name="IdentityProtectionPolicyV3SelfManagementOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer"></a>

```typescript
import { identityProtectionPolicyV3 } from '@cdktf/provider-opentelekomcloud'

new identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetMobile">resetMobile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetPassword">resetPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetMobile` <a name="resetMobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetMobile"></a>

```typescript
public resetMobile(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.emailInput">emailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobileInput">mobileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.passwordInput">passwordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKey">accessKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.email">email</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobile">mobile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.password">password</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mobileInput`<sup>Optional</sup> <a name="mobileInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobileInput"></a>

```typescript
public readonly mobileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.email"></a>

```typescript
public readonly email: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobile"></a>

```typescript
public readonly mobile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.password"></a>

```typescript
public readonly password: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProtectionPolicyV3SelfManagement;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

---



