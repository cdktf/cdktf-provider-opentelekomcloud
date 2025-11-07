# `ltsCrossAccountAccessV2` Submodule <a name="`ltsCrossAccountAccessV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCrossAccountAccessV2 <a name="LtsCrossAccountAccessV2" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

new ltsCrossAccountAccessV2.LtsCrossAccountAccessV2(scope: Construct, id: string, config: LtsCrossAccountAccessV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LtsCrossAccountAccessV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LtsCrossAccountAccessV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LtsCrossAccountAccessV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType">accessConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput">agencyDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput">agencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput">agencyProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput">logAgencyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput">logAgencyGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput">logAgencyStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput">logAgencyStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput">logStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput">logStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName">agencyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName">agencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId">agencyProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId">logAgencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName">logAgencyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId">logAgencyStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName">logAgencyStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId">logStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName">logStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessConfigType`<sup>Required</sup> <a name="accessConfigType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType"></a>

```typescript
public readonly accessConfigType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `agencyDomainNameInput`<sup>Optional</sup> <a name="agencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput"></a>

```typescript
public readonly agencyDomainNameInput: string;
```

- *Type:* string

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput"></a>

```typescript
public readonly agencyNameInput: string;
```

- *Type:* string

---

##### `agencyProjectIdInput`<sup>Optional</sup> <a name="agencyProjectIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput"></a>

```typescript
public readonly agencyProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAgencyGroupIdInput`<sup>Optional</sup> <a name="logAgencyGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput"></a>

```typescript
public readonly logAgencyGroupIdInput: string;
```

- *Type:* string

---

##### `logAgencyGroupNameInput`<sup>Optional</sup> <a name="logAgencyGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput"></a>

```typescript
public readonly logAgencyGroupNameInput: string;
```

- *Type:* string

---

##### `logAgencyStreamIdInput`<sup>Optional</sup> <a name="logAgencyStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput"></a>

```typescript
public readonly logAgencyStreamIdInput: string;
```

- *Type:* string

---

##### `logAgencyStreamNameInput`<sup>Optional</sup> <a name="logAgencyStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput"></a>

```typescript
public readonly logAgencyStreamNameInput: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logStreamIdInput`<sup>Optional</sup> <a name="logStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput"></a>

```typescript
public readonly logStreamIdInput: string;
```

- *Type:* string

---

##### `logStreamNameInput`<sup>Optional</sup> <a name="logStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput"></a>

```typescript
public readonly logStreamNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agencyDomainName`<sup>Required</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName"></a>

```typescript
public readonly agencyDomainName: string;
```

- *Type:* string

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

---

##### `agencyProjectId`<sup>Required</sup> <a name="agencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId"></a>

```typescript
public readonly agencyProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAgencyGroupId`<sup>Required</sup> <a name="logAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId"></a>

```typescript
public readonly logAgencyGroupId: string;
```

- *Type:* string

---

##### `logAgencyGroupName`<sup>Required</sup> <a name="logAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName"></a>

```typescript
public readonly logAgencyGroupName: string;
```

- *Type:* string

---

##### `logAgencyStreamId`<sup>Required</sup> <a name="logAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId"></a>

```typescript
public readonly logAgencyStreamId: string;
```

- *Type:* string

---

##### `logAgencyStreamName`<sup>Required</sup> <a name="logAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName"></a>

```typescript
public readonly logAgencyStreamName: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCrossAccountAccessV2Config <a name="LtsCrossAccountAccessV2Config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.Initializer"></a>

```typescript
import { ltsCrossAccountAccessV2 } from '@cdktf/provider-opentelekomcloud'

const ltsCrossAccountAccessV2Config: ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName">agencyDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName">agencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId">agencyProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId">logAgencyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName">logAgencyGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId">logAgencyStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName">logAgencyStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId">logStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName">logStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agencyDomainName`<sup>Required</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName"></a>

```typescript
public readonly agencyDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}.

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}.

---

##### `agencyProjectId`<sup>Required</sup> <a name="agencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId"></a>

```typescript
public readonly agencyProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}.

---

##### `logAgencyGroupId`<sup>Required</sup> <a name="logAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId"></a>

```typescript
public readonly logAgencyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}.

---

##### `logAgencyGroupName`<sup>Required</sup> <a name="logAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName"></a>

```typescript
public readonly logAgencyGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}.

---

##### `logAgencyStreamId`<sup>Required</sup> <a name="logAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId"></a>

```typescript
public readonly logAgencyStreamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}.

---

##### `logAgencyStreamName`<sup>Required</sup> <a name="logAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName"></a>

```typescript
public readonly logAgencyStreamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}.

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}.

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}.

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}.

---



