# `opentelekomcloud_dc_virtual_gateway_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dc_virtual_gateway_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2).

# `dcVirtualGatewayV2` Submodule <a name="`dcVirtualGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualGatewayV2 <a name="DcVirtualGatewayV2" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2 opentelekomcloud_dc_virtual_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualGatewayV2.DcVirtualGatewayV2(scope: Construct, id: string, config: DcVirtualGatewayV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId">resetRedundantDeviceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn"></a>

```typescript
public resetAsn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRedundantDeviceId` <a name="resetRedundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId"></a>

```typescript
public resetRedundantDeviceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualGatewayV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIdInput">localEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput">redundantDeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId">localEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId">redundantDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localEpGroupIdInput`<sup>Optional</sup> <a name="localEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIdInput"></a>

```typescript
public readonly localEpGroupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `redundantDeviceIdInput`<sup>Optional</sup> <a name="redundantDeviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput"></a>

```typescript
public readonly redundantDeviceIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localEpGroupId`<sup>Required</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId"></a>

```typescript
public readonly localEpGroupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `redundantDeviceId`<sup>Required</sup> <a name="redundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId"></a>

```typescript
public readonly redundantDeviceId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualGatewayV2Config <a name="DcVirtualGatewayV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualGatewayV2Config: dcVirtualGatewayV2.DcVirtualGatewayV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupId">localEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#local_ep_group_id DcVirtualGatewayV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId">redundantDeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localEpGroupId`<sup>Required</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupId"></a>

```typescript
public readonly localEpGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#local_ep_group_id DcVirtualGatewayV2#local_ep_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}.

---

##### `redundantDeviceId`<sup>Optional</sup> <a name="redundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId"></a>

```typescript
public readonly redundantDeviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}.

---


