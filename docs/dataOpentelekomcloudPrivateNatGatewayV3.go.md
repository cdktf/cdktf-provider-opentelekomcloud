# `dataOpentelekomcloudPrivateNatGatewayV3` Submodule <a name="`dataOpentelekomcloudPrivateNatGatewayV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatGatewayV3 <a name="DataOpentelekomcloudPrivateNatGatewayV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3 opentelekomcloud_private_nat_gateway_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.NewDataOpentelekomcloudPrivateNatGatewayV3(scope Construct, id *string, config DataOpentelekomcloudPrivateNatGatewayV3Config) DataOpentelekomcloudPrivateNatGatewayV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config">DataOpentelekomcloudPrivateNatGatewayV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config">DataOpentelekomcloudPrivateNatGatewayV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatGatewayV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatGatewayV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatGatewayV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudPrivateNatGatewayV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatGatewayV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.gateways">Gateways</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.gateways"></a>

```go
func Gateways() DataOpentelekomcloudPrivateNatGatewayV3GatewaysList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatGatewayV3Config <a name="DataOpentelekomcloudPrivateNatGatewayV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

&dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3#id DataOpentelekomcloudPrivateNatGatewayV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3#name DataOpentelekomcloudPrivateNatGatewayV3#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3#id DataOpentelekomcloudPrivateNatGatewayV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/private_nat_gateway_v3#name DataOpentelekomcloudPrivateNatGatewayV3#name}.

---

### DataOpentelekomcloudPrivateNatGatewayV3Gateways <a name="DataOpentelekomcloudPrivateNatGatewayV3Gateways" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

&dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3Gateways {

}
```


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

&dataopentelekomcloudprivatenatgatewayv3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.NewDataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.NewDataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.ngportIpAddress">NgportIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.virsubnetId">VirsubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NgportIpAddress`<sup>Required</sup> <a name="NgportIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.ngportIpAddress"></a>

```go
func NgportIpAddress() *string
```

- *Type:* *string

---

##### `VirsubnetId`<sup>Required</sup> <a name="VirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.virsubnetId"></a>

```go
func VirsubnetId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs</a>

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysList <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.NewDataOpentelekomcloudPrivateNatGatewayV3GatewaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudPrivateNatGatewayV3GatewaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudprivatenatgatewayv3"

dataopentelekomcloudprivatenatgatewayv3.NewDataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.downlinkVpcs">DownlinkVpcs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.ruleMax">RuleMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.spec">Spec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.transitIpPoolSizeMax">TransitIpPoolSizeMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways">DataOpentelekomcloudPrivateNatGatewayV3Gateways</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DownlinkVpcs`<sup>Required</sup> <a name="DownlinkVpcs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.downlinkVpcs"></a>

```go
func DownlinkVpcs() DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList</a>

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.enterpriseProjectId"></a>

```go
func EnterpriseProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RuleMax`<sup>Required</sup> <a name="RuleMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.ruleMax"></a>

```go
func RuleMax() *f64
```

- *Type:* *f64

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.spec"></a>

```go
func Spec() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TransitIpPoolSizeMax`<sup>Required</sup> <a name="TransitIpPoolSizeMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.transitIpPoolSizeMax"></a>

```go
func TransitIpPoolSizeMax() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudPrivateNatGatewayV3Gateways
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways">DataOpentelekomcloudPrivateNatGatewayV3Gateways</a>

---



