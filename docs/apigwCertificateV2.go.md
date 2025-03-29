# `apigwCertificateV2` Submodule <a name="`apigwCertificateV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwCertificateV2 <a name="ApigwCertificateV2" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2 opentelekomcloud_apigw_certificate_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

apigwcertificatev2.NewApigwCertificateV2(scope Construct, id *string, config ApigwCertificateV2Config) ApigwCertificateV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config">ApigwCertificateV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config">ApigwCertificateV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetTrustedRootCa">ResetTrustedRootCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetTrustedRootCa` <a name="ResetTrustedRootCa" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetTrustedRootCa"></a>

```go
func ResetTrustedRootCa()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwCertificateV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

apigwcertificatev2.ApigwCertificateV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

apigwcertificatev2.ApigwCertificateV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

apigwcertificatev2.ApigwCertificateV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

apigwcertificatev2.ApigwCertificateV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigwCertificateV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigwCertificateV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigwCertificateV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigwCertificateV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.effectedAt">EffectedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.sans">Sans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.trustedRootCaInput">TrustedRootCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.trustedRootCa">TrustedRootCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectedAt`<sup>Required</sup> <a name="EffectedAt" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.effectedAt"></a>

```go
func EffectedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Sans`<sup>Required</sup> <a name="Sans" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.sans"></a>

```go
func Sans() *[]*string
```

- *Type:* *[]*string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `TrustedRootCaInput`<sup>Optional</sup> <a name="TrustedRootCaInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.trustedRootCaInput"></a>

```go
func TrustedRootCaInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `TrustedRootCa`<sup>Required</sup> <a name="TrustedRootCa" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.trustedRootCa"></a>

```go
func TrustedRootCa() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwCertificateV2Config <a name="ApigwCertificateV2Config" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/apigwcertificatev2"

&apigwcertificatev2.ApigwCertificateV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	Name: *string,
	PrivateKey: *string,
	Id: *string,
	InstanceId: *string,
	TrustedRootCa: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#content ApigwCertificateV2#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#name ApigwCertificateV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#private_key ApigwCertificateV2#private_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#id ApigwCertificateV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#instance_id ApigwCertificateV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.trustedRootCa">TrustedRootCa</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#trusted_root_ca ApigwCertificateV2#trusted_root_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#type ApigwCertificateV2#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#content ApigwCertificateV2#content}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#name ApigwCertificateV2#name}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#private_key ApigwCertificateV2#private_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#id ApigwCertificateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#instance_id ApigwCertificateV2#instance_id}.

---

##### `TrustedRootCa`<sup>Optional</sup> <a name="TrustedRootCa" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.trustedRootCa"></a>

```go
TrustedRootCa *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#trusted_root_ca ApigwCertificateV2#trusted_root_ca}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCertificateV2.ApigwCertificateV2Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_certificate_v2#type ApigwCertificateV2#type}.

---



