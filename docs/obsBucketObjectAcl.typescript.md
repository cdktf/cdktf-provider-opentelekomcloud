# `obsBucketObjectAcl` Submodule <a name="`obsBucketObjectAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObjectAcl <a name="ObsBucketObjectAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl opentelekomcloud_obs_bucket_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAcl(scope: Construct, id: string, config: ObsBucketObjectAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission">putAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission">putPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission">resetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission">resetPublicPermission</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountPermission` <a name="putAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission"></a>

```typescript
public putAccountPermission(value: IResolvable | ObsBucketObjectAclAccountPermission[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]

---

##### `putPublicPermission` <a name="putPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission"></a>

```typescript
public putPublicPermission(value: ObsBucketObjectAclPublicPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `resetAccountPermission` <a name="resetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission"></a>

```typescript
public resetAccountPermission(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublicPermission` <a name="resetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission"></a>

```typescript
public resetPublicPermission(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketObjectAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketObjectAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObjectAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission">accountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput">accountPermissionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput">publicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key">key</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountPermission`<sup>Required</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission"></a>

```typescript
public readonly accountPermission: ObsBucketObjectAclAccountPermissionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a>

---

##### `ownerPermission`<sup>Required</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission"></a>

```typescript
public readonly ownerPermission: ObsBucketObjectAclOwnerPermissionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a>

---

##### `publicPermission`<sup>Required</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission"></a>

```typescript
public readonly publicPermission: ObsBucketObjectAclPublicPermissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `accountPermissionInput`<sup>Optional</sup> <a name="accountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput"></a>

```typescript
public readonly accountPermissionInput: IResolvable | ObsBucketObjectAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `publicPermissionInput`<sup>Optional</sup> <a name="publicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput"></a>

```typescript
public readonly publicPermissionInput: ObsBucketObjectAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectAclAccountPermission <a name="ObsBucketObjectAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketObjectAclAccountPermission: obsBucketObjectAcl.ObsBucketObjectAclAccountPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject">accessToObject</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}.

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `accessToObject`<sup>Optional</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject"></a>

```typescript
public readonly accessToObject: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

### ObsBucketObjectAclConfig <a name="ObsBucketObjectAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketObjectAclConfig: obsBucketObjectAcl.ObsBucketObjectAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission">accountPermission</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | public_permission block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission"></a>

```typescript
public readonly accountPermission: IResolvable | ObsBucketObjectAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#account_permission ObsBucketObjectAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission"></a>

```typescript
public readonly publicPermission: ObsBucketObjectAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#public_permission ObsBucketObjectAcl#public_permission}

---

### ObsBucketObjectAclOwnerPermission <a name="ObsBucketObjectAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketObjectAclOwnerPermission: obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission = { ... }
```


### ObsBucketObjectAclPublicPermission <a name="ObsBucketObjectAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

const obsBucketObjectAclPublicPermission: obsBucketObjectAcl.ObsBucketObjectAclPublicPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject">accessToObject</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `accessToObject`<sup>Optional</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject"></a>

```typescript
public readonly accessToObject: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketObjectAclAccountPermissionList <a name="ObsBucketObjectAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get"></a>

```typescript
public get(index: number): ObsBucketObjectAclAccountPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketObjectAclAccountPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>[]

---


### ObsBucketObjectAclAccountPermissionOutputReference <a name="ObsBucketObjectAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject">resetAccessToObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToObject` <a name="resetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject"></a>

```typescript
public resetAccessToObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput">accessToObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToObjectInput`<sup>Optional</sup> <a name="accessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput"></a>

```typescript
public readonly accessToObjectInput: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject"></a>

```typescript
public readonly accessToObject: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketObjectAclAccountPermission;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>

---


### ObsBucketObjectAclOwnerPermissionList <a name="ObsBucketObjectAclOwnerPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get"></a>

```typescript
public get(index: number): ObsBucketObjectAclOwnerPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ObsBucketObjectAclOwnerPermissionOutputReference <a name="ObsBucketObjectAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject"></a>

```typescript
public readonly accessToObject: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketObjectAclOwnerPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a>

---


### ObsBucketObjectAclPublicPermissionOutputReference <a name="ObsBucketObjectAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer"></a>

```typescript
import { obsBucketObjectAcl } from '@cdktf/provider-opentelekomcloud'

new obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject">resetAccessToObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```typescript
public resetAccessToAcl(): void
```

##### `resetAccessToObject` <a name="resetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject"></a>

```typescript
public resetAccessToObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput">accessToObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```typescript
public readonly accessToAclInput: string[];
```

- *Type:* string[]

---

##### `accessToObjectInput`<sup>Optional</sup> <a name="accessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput"></a>

```typescript
public readonly accessToObjectInput: string[];
```

- *Type:* string[]

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl"></a>

```typescript
public readonly accessToAcl: string[];
```

- *Type:* string[]

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject"></a>

```typescript
public readonly accessToObject: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketObjectAclPublicPermission;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---



