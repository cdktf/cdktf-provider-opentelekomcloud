# `swrOrganizationPermissionsV2` Submodule <a name="`swrOrganizationPermissionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SwrOrganizationPermissionsV2 <a name="SwrOrganizationPermissionsV2" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2 opentelekomcloud_swr_organization_permissions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

new swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2(scope: Construct, id: string, config: SwrOrganizationPermissionsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config">SwrOrganizationPermissionsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config">SwrOrganizationPermissionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts"></a>

```typescript
public putTimeouts(value: SwrOrganizationPermissionsV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SwrOrganizationPermissionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SwrOrganizationPermissionsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SwrOrganizationPermissionsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SwrOrganizationPermissionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SwrOrganizationPermissionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference">SwrOrganizationPermissionsV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.authInput">authInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.auth">auth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeouts"></a>

```typescript
public readonly timeouts: SwrOrganizationPermissionsV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference">SwrOrganizationPermissionsV2TimeoutsOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.authInput"></a>

```typescript
public readonly authInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SwrOrganizationPermissionsV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.auth"></a>

```typescript
public readonly auth: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SwrOrganizationPermissionsV2Config <a name="SwrOrganizationPermissionsV2Config" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.Initializer"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

const swrOrganizationPermissionsV2Config: swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.auth">auth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#auth SwrOrganizationPermissionsV2#auth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#organization SwrOrganizationPermissionsV2#organization}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#user_id SwrOrganizationPermissionsV2#user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#username SwrOrganizationPermissionsV2#username}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#id SwrOrganizationPermissionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.auth"></a>

```typescript
public readonly auth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#auth SwrOrganizationPermissionsV2#auth}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#organization SwrOrganizationPermissionsV2#organization}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#user_id SwrOrganizationPermissionsV2#user_id}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#username SwrOrganizationPermissionsV2#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#id SwrOrganizationPermissionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: SwrOrganizationPermissionsV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#timeouts SwrOrganizationPermissionsV2#timeouts}

---

### SwrOrganizationPermissionsV2Timeouts <a name="SwrOrganizationPermissionsV2Timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.Initializer"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

const swrOrganizationPermissionsV2Timeouts: swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#default SwrOrganizationPermissionsV2#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/swr_organization_permissions_v2#default SwrOrganizationPermissionsV2#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### SwrOrganizationPermissionsV2TimeoutsOutputReference <a name="SwrOrganizationPermissionsV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { swrOrganizationPermissionsV2 } from '@cdktf/provider-opentelekomcloud'

new swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SwrOrganizationPermissionsV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

---



