# `obsBucketAcl` Submodule <a name="`obsBucketAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketAcl <a name="ObsBucketAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl opentelekomcloud_obs_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAcl(scope: Construct, id: string, config: ObsBucketAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission">putAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission">putLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission">putOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission">putPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission">resetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission">resetLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission">resetOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission">resetPublicPermission</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountPermission` <a name="putAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission"></a>

```typescript
public putAccountPermission(value: IResolvable | ObsBucketAclAccountPermission[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---

##### `putLogDeliveryUserPermission` <a name="putLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission"></a>

```typescript
public putLogDeliveryUserPermission(value: ObsBucketAclLogDeliveryUserPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `putOwnerPermission` <a name="putOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission"></a>

```typescript
public putOwnerPermission(value: ObsBucketAclOwnerPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `putPublicPermission` <a name="putPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission"></a>

```typescript
public putPublicPermission(value: ObsBucketAclPublicPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `resetAccountPermission` <a name="resetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission"></a>

```typescript
public resetAccountPermission(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogDeliveryUserPermission` <a name="resetLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission"></a>

```typescript
public resetLogDeliveryUserPermission(): void
```

##### `resetOwnerPermission` <a name="resetOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission"></a>

```typescript
public resetOwnerPermission(): void
```

##### `resetPublicPermission` <a name="resetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission"></a>

```typescript
public resetPublicPermission(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketAcl.ObsBucketAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketAcl.ObsBucketAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketAcl.ObsBucketAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketAcl.ObsBucketAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission">accountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission">logDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput">accountPermissionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput">logDeliveryUserPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput">ownerPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput">publicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountPermission`<sup>Required</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission"></a>

```typescript
public readonly accountPermission: ObsBucketAclAccountPermissionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a>

---

##### `logDeliveryUserPermission`<sup>Required</sup> <a name="logDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission"></a>

```typescript
public readonly logDeliveryUserPermission: ObsBucketAclLogDeliveryUserPermissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a>

---

##### `ownerPermission`<sup>Required</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission"></a>

```typescript
public readonly ownerPermission: ObsBucketAclOwnerPermissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a>

---

##### `publicPermission`<sup>Required</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission"></a>

```typescript
public readonly publicPermission: ObsBucketAclPublicPermissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `accountPermissionInput`<sup>Optional</sup> <a name="accountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput"></a>

```typescript
public readonly accountPermissionInput: IResolvable | ObsBucketAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logDeliveryUserPermissionInput`<sup>Optional</sup> <a name="logDeliveryUserPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput"></a>

```typescript
public readonly logDeliveryUserPermissionInput: ObsBucketAclLogDeliveryUserPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `ownerPermissionInput`<sup>Optional</sup> <a name="ownerPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput"></a>

```typescript
public readonly ownerPermissionInput: ObsBucketAclOwnerPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `publicPermissionInput`<sup>Optional</sup> <a name="publicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput"></a>

```typescript
public readonly publicPermissionInput: ObsBucketAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketAclAccountPermission <a name="ObsBucketAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketAclAccountPermission: obsBucketAcl.ObsBucketAclAccountPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}.

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclConfig <a name="ObsBucketAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketAclConfig: obsBucketAcl.ObsBucketAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission">accountPermission</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission">logDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | log_delivery_user_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | owner_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | public_permission block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission"></a>

```typescript
public readonly accountPermission: IResolvable | ObsBucketAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_permission ObsBucketAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDeliveryUserPermission`<sup>Optional</sup> <a name="logDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission"></a>

```typescript
public readonly logDeliveryUserPermission: ObsBucketAclLogDeliveryUserPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

log_delivery_user_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#log_delivery_user_permission ObsBucketAcl#log_delivery_user_permission}

---

##### `ownerPermission`<sup>Optional</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission"></a>

```typescript
public readonly ownerPermission: ObsBucketAclOwnerPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

owner_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#owner_permission ObsBucketAcl#owner_permission}

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission"></a>

```typescript
public readonly publicPermission: ObsBucketAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#public_permission ObsBucketAcl#public_permission}

---

### ObsBucketAclLogDeliveryUserPermission <a name="ObsBucketAclLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketAclLogDeliveryUserPermission: obsBucketAcl.ObsBucketAclLogDeliveryUserPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclOwnerPermission <a name="ObsBucketAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketAclOwnerPermission: obsBucketAcl.ObsBucketAclOwnerPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclPublicPermission <a name="ObsBucketAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketAclPublicPermission: obsBucketAcl.ObsBucketAclPublicPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketAclAccountPermissionList <a name="ObsBucketAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAclAccountPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get"></a>

```typescript
public get(index: number): ObsBucketAclAccountPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---


### ObsBucketAclAccountPermissionOutputReference <a name="ObsBucketAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAclAccountPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket"></a>

```typescript
public resetAccessToBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput"></a>

```typescript
public readonly accessToBucketInput: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketAclAccountPermission;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>

---


### ObsBucketAclLogDeliveryUserPermissionOutputReference <a name="ObsBucketAclLogDeliveryUserPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket"></a>

```typescript
public resetAccessToBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput"></a>

```typescript
public readonly accessToBucketInput: string[];
```

- *Type:* string[]

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketAclLogDeliveryUserPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---


### ObsBucketAclOwnerPermissionOutputReference <a name="ObsBucketAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket"></a>

```typescript
public resetAccessToBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput"></a>

```typescript
public readonly accessToBucketInput: string[];
```

- *Type:* string[]

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketAclOwnerPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---


### ObsBucketAclPublicPermissionOutputReference <a name="ObsBucketAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketAcl.ObsBucketAclPublicPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket"></a>

```typescript
public resetAccessToBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput"></a>

```typescript
public readonly accessToBucketInput: string[];
```

- *Type:* string[]

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket"></a>

```typescript
public readonly accessToBucket: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---



