# `apigwApiPublishmentV2` Submodule <a name="`apigwApiPublishmentV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwApiPublishmentV2 <a name="ApigwApiPublishmentV2" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2 opentelekomcloud_apigw_api_publishment_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiPublishmentV2.ApigwApiPublishmentV2(scope: Construct, id: string, config: ApigwApiPublishmentV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config">ApigwApiPublishmentV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config">ApigwApiPublishmentV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwApiPublishmentV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isConstruct"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiPublishmentV2.ApigwApiPublishmentV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformElement"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformResource"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigwApiPublishmentV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwApiPublishmentV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwApiPublishmentV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwApiPublishmentV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiName">apiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.history">history</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList">ApigwApiPublishmentV2HistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.publishedAt">publishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.publishId">publishId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `history`<sup>Required</sup> <a name="history" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.history"></a>

```typescript
public readonly history: ApigwApiPublishmentV2HistoryList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList">ApigwApiPublishmentV2HistoryList</a>

---

##### `publishedAt`<sup>Required</sup> <a name="publishedAt" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.publishedAt"></a>

```typescript
public readonly publishedAt: string;
```

- *Type:* string

---

##### `publishId`<sup>Required</sup> <a name="publishId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.publishId"></a>

```typescript
public readonly publishId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwApiPublishmentV2Config <a name="ApigwApiPublishmentV2Config" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.Initializer"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiPublishmentV2Config: apigwApiPublishmentV2.ApigwApiPublishmentV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#api_id ApigwApiPublishmentV2#api_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#environment_id ApigwApiPublishmentV2#environment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#gateway_id ApigwApiPublishmentV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#description ApigwApiPublishmentV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#id ApigwApiPublishmentV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#version_id ApigwApiPublishmentV2#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#api_id ApigwApiPublishmentV2#api_id}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#environment_id ApigwApiPublishmentV2#environment_id}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#gateway_id ApigwApiPublishmentV2#gateway_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#description ApigwApiPublishmentV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#id ApigwApiPublishmentV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2Config.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/apigw_api_publishment_v2#version_id ApigwApiPublishmentV2#version_id}.

---

### ApigwApiPublishmentV2History <a name="ApigwApiPublishmentV2History" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2History"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2History.Initializer"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiPublishmentV2History: apigwApiPublishmentV2.ApigwApiPublishmentV2History = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ApigwApiPublishmentV2HistoryList <a name="ApigwApiPublishmentV2HistoryList" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.get"></a>

```typescript
public get(index: number): ApigwApiPublishmentV2HistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApigwApiPublishmentV2HistoryOutputReference <a name="ApigwApiPublishmentV2HistoryOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer"></a>

```typescript
import { apigwApiPublishmentV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2History">ApigwApiPublishmentV2History</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2HistoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigwApiPublishmentV2History;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiPublishmentV2.ApigwApiPublishmentV2History">ApigwApiPublishmentV2History</a>

---



