# `identityLoginPolicyV3` Submodule <a name="`identityLoginPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityLoginPolicyV3 <a name="IdentityLoginPolicyV3" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3 opentelekomcloud_identity_login_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

new identityLoginPolicyV3.IdentityLoginPolicyV3(scope: Construct, id: string, config?: IdentityLoginPolicyV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config">IdentityLoginPolicyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config">IdentityLoginPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod">resetAccountValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin">resetCustomInfoForLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration">resetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes">resetLoginFailedTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures">resetPeriodWithLoginFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo">resetShowRecentLoginInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountValidityPeriod` <a name="resetAccountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod"></a>

```typescript
public resetAccountValidityPeriod(): void
```

##### `resetCustomInfoForLogin` <a name="resetCustomInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin"></a>

```typescript
public resetCustomInfoForLogin(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration"></a>

```typescript
public resetLockoutDuration(): void
```

##### `resetLoginFailedTimes` <a name="resetLoginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes"></a>

```typescript
public resetLoginFailedTimes(): void
```

##### `resetPeriodWithLoginFailures` <a name="resetPeriodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures"></a>

```typescript
public resetPeriodWithLoginFailures(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```

##### `resetShowRecentLoginInfo` <a name="resetShowRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo"></a>

```typescript
public resetShowRecentLoginInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityLoginPolicyV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityLoginPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityLoginPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput">accountValidityPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput">customInfoForLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput">loginFailedTimesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput">periodWithLoginFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput">showRecentLoginInfoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod">accountValidityPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin">customInfoForLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes">loginFailedTimes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures">periodWithLoginFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo">showRecentLoginInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountValidityPeriodInput`<sup>Optional</sup> <a name="accountValidityPeriodInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput"></a>

```typescript
public readonly accountValidityPeriodInput: number;
```

- *Type:* number

---

##### `customInfoForLoginInput`<sup>Optional</sup> <a name="customInfoForLoginInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput"></a>

```typescript
public readonly customInfoForLoginInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput"></a>

```typescript
public readonly lockoutDurationInput: number;
```

- *Type:* number

---

##### `loginFailedTimesInput`<sup>Optional</sup> <a name="loginFailedTimesInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput"></a>

```typescript
public readonly loginFailedTimesInput: number;
```

- *Type:* number

---

##### `periodWithLoginFailuresInput`<sup>Optional</sup> <a name="periodWithLoginFailuresInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput"></a>

```typescript
public readonly periodWithLoginFailuresInput: number;
```

- *Type:* number

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `showRecentLoginInfoInput`<sup>Optional</sup> <a name="showRecentLoginInfoInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput"></a>

```typescript
public readonly showRecentLoginInfoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountValidityPeriod`<sup>Required</sup> <a name="accountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod"></a>

```typescript
public readonly accountValidityPeriod: number;
```

- *Type:* number

---

##### `customInfoForLogin`<sup>Required</sup> <a name="customInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin"></a>

```typescript
public readonly customInfoForLogin: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

---

##### `loginFailedTimes`<sup>Required</sup> <a name="loginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes"></a>

```typescript
public readonly loginFailedTimes: number;
```

- *Type:* number

---

##### `periodWithLoginFailures`<sup>Required</sup> <a name="periodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures"></a>

```typescript
public readonly periodWithLoginFailures: number;
```

- *Type:* number

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `showRecentLoginInfo`<sup>Required</sup> <a name="showRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo"></a>

```typescript
public readonly showRecentLoginInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityLoginPolicyV3Config <a name="IdentityLoginPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.Initializer"></a>

```typescript
import { identityLoginPolicyV3 } from '@cdktf/provider-opentelekomcloud'

const identityLoginPolicyV3Config: identityLoginPolicyV3.IdentityLoginPolicyV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod">accountValidityPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin">customInfoForLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes">loginFailedTimes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures">periodWithLoginFailures</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo">showRecentLoginInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountValidityPeriod`<sup>Optional</sup> <a name="accountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod"></a>

```typescript
public readonly accountValidityPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}.

---

##### `customInfoForLogin`<sup>Optional</sup> <a name="customInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin"></a>

```typescript
public readonly customInfoForLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}.

---

##### `loginFailedTimes`<sup>Optional</sup> <a name="loginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes"></a>

```typescript
public readonly loginFailedTimes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}.

---

##### `periodWithLoginFailures`<sup>Optional</sup> <a name="periodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures"></a>

```typescript
public readonly periodWithLoginFailures: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}.

---

##### `showRecentLoginInfo`<sup>Optional</sup> <a name="showRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo"></a>

```typescript
public readonly showRecentLoginInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}.

---



